"""
Remove the background from a portrait and emit a web-ready PNG.

    python scripts/remove-bg.py "C:/path/to/photo.jpg"

Writes public/portrait.png (transparent, trimmed to the subject, max 1400px tall).
Pass --out to write somewhere else, --keep-canvas to skip the auto-crop.

Requires: pip install rembg onnxruntime pillow
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_OUT = ROOT / "public" / "portrait.png"
MAX_HEIGHT = 1400


def main() -> int:
    parser = argparse.ArgumentParser(description="Cut the background out of a portrait.")
    parser.add_argument("source", help="Path to the input image (jpg/png/webp).")
    parser.add_argument("--out", default=str(DEFAULT_OUT), help="Output PNG path.")
    parser.add_argument(
        "--keep-canvas",
        action="store_true",
        help="Keep the original framing instead of cropping to the subject.",
    )
    args = parser.parse_args()

    src = Path(args.source).expanduser()
    if not src.is_file():
        print(f"error: no such file: {src}", file=sys.stderr)
        return 1

    try:
        from PIL import Image
        from rembg import new_session, remove
    except ImportError:
        print(
            "error: missing dependencies. Run:\n"
            "    pip install rembg onnxruntime pillow",
            file=sys.stderr,
        )
        return 1

    print(f"reading  {src}")
    image = Image.open(src).convert("RGBA")

    # isnet-general-use gives noticeably cleaner hair/shoulder edges than u2net
    # on portraits; it downloads once (~180 MB) into ~/.u2net.
    print("matting  (first run downloads the model, be patient)")
    try:
        session = new_session("isnet-general-use")
    except Exception as exc:  # noqa: BLE001 - fall back rather than fail
        print(f"         isnet unavailable ({exc}); falling back to u2net")
        session = new_session("u2net")

    cut = remove(
        image,
        session=session,
        alpha_matting=True,
        alpha_matting_foreground_threshold=250,
        alpha_matting_background_threshold=15,
        alpha_matting_erode_size=8,
    )

    if not args.keep_canvas:
        bbox = cut.getbbox()
        if bbox:
            cut = cut.crop(bbox)
            print(f"cropped  to {cut.width}x{cut.height}")

    if cut.height > MAX_HEIGHT:
        ratio = MAX_HEIGHT / cut.height
        cut = cut.resize((round(cut.width * ratio), MAX_HEIGHT), Image.LANCZOS)
        print(f"resized  to {cut.width}x{cut.height}")

    out = Path(args.out).expanduser()
    out.parent.mkdir(parents=True, exist_ok=True)
    cut.save(out, "PNG", optimize=True)

    kb = out.stat().st_size / 1024
    print(f"wrote    {out}  ({kb:.0f} KB)")
    print("\nDone. Refresh the dev server to see it in the hero.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
