import Image from "next/image";
import { useEffect, useState } from "react";

import data from "../../data/projects.json";
interface IMac {
  name: string;
  size?: number;
}

export default function Mac({ name, size = 0.1 }: IMac) {
  return (
    <div>
      <svg
        width={3316 * size}
        height={1942 * size}
        viewBox="0 0 3316 1942"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g filter="url(#filter0_f_26_832)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1657 1925C2562.75 1925 3297 1912.91 3297 1898C3297 1883.09 2562.75 1871 1657 1871C751.253 1871 17 1883.09 17 1898C17 1912.91 751.253 1925 1657 1925Z"
            fill="black"
            fill-opacity="0.15"
          />
        </g>
        <g filter="url(#filter1_f_26_832)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1657 1903C2514.15 1903 3209 1899.87 3209 1896C3209 1892.13 2514.15 1889 1657 1889C799.854 1889 105 1892.13 105 1896C105 1899.87 799.854 1903 1657 1903Z"
            fill="black"
            fill-opacity="0.4"
          />
        </g>
        <g filter="url(#filter2_f_26_832)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1657 1903C2425.78 1903 3049 1899.87 3049 1896C3049 1892.13 2425.78 1889 1657 1889C888.22 1889 265 1892.13 265 1896C265 1899.87 888.22 1903 1657 1903Z"
            fill="black"
            fill-opacity="0.6"
          />
        </g>
        <g filter="url(#filter3_i_26_832)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M308 147.2C308 95.6751 308 69.9128 318.027 50.2329C326.848 32.922 340.922 18.8477 358.233 10.0274C377.913 0 403.675 0 455.2 0H2866.8C2918.32 0 2944.09 0 2963.77 10.0274C2981.08 18.8477 2995.15 32.922 3003.97 50.2329C3014 69.9128 3014 95.6752 3014 147.2V1737.8C3014 1789.32 3014 1815.09 3003.97 1834.77C2995.15 1852.08 2981.08 1866.15 2963.77 1874.97C2944.09 1885 2918.32 1885 2866.8 1885H455.2C403.675 1885 377.913 1885 358.233 1874.97C340.922 1866.15 326.848 1852.08 318.027 1834.77C308 1815.09 308 1789.32 308 1737.8V147.2Z"
            fill="#87888D"
          />
        </g>
        <g filter="url(#filter4_ii_26_832)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M317 143.4C317 96.3556 317 72.8334 326.155 54.8648C334.209 39.0592 347.059 26.2088 362.865 18.1555C380.833 9 404.356 9 451.4 9H2870.6C2917.64 9 2941.17 9 2959.14 18.1555C2974.94 26.2088 2987.79 39.0592 2995.84 54.8648C3005 72.8334 3005 96.3556 3005 143.4V1741.6C3005 1788.64 3005 1812.17 2995.84 1830.14C2987.79 1845.94 2974.94 1858.79 2959.14 1866.84C2941.17 1876 2917.64 1876 2870.6 1876H451.4C404.356 1876 380.833 1876 362.865 1866.84C347.059 1858.79 334.209 1845.94 326.155 1830.14C317 1812.17 317 1788.64 317 1741.6V143.4Z"
            fill="url(#paint0_linear_26_832)"
          />
        </g>
        <g filter="url(#filter5_ddd_26_832)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M324 140.8C324 97.1159 324 75.2739 332.501 58.5887C339.98 43.9121 351.912 31.9796 366.589 24.5015C383.274 16 405.116 16 448.8 16H2873.2C2916.88 16 2938.73 16 2955.41 24.5015C2970.09 31.9796 2982.02 43.9121 2989.5 58.5887C2998 75.2739 2998 97.1159 2998 140.8V1744.2C2998 1787.88 2998 1809.73 2989.5 1826.41C2982.02 1841.09 2970.09 1853.02 2955.41 1860.5C2938.73 1869 2916.88 1869 2873.2 1869H448.8C405.116 1869 383.274 1869 366.589 1860.5C351.912 1853.02 339.98 1841.09 332.501 1826.41C324 1809.73 324 1787.88 324 1744.2V140.8Z"
            fill="url(#paint1_linear_26_832)"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1661 81C1665.97 81 1670 76.9706 1670 72C1670 67.0294 1665.97 63 1661 63C1656.03 63 1652 67.0294 1652 72C1652 76.9706 1656.03 81 1661 81Z"
          fill="#101010"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1661 77C1663.76 77 1666 74.7614 1666 72C1666 69.2386 1663.76 67 1661 67C1658.24 67 1656 69.2386 1656 72C1656 74.7614 1658.24 77 1661 77Z"
          fill="url(#paint2_linear_26_832)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1661 76C1663.21 76 1665 74.2091 1665 72C1665 69.7909 1663.21 68 1661 68C1658.79 68 1657 69.7909 1657 72C1657 74.2091 1658.79 76 1661 76Z"
          fill="url(#paint3_radial_26_832)"
        />
        <mask
          id="mask0_26_832"
          maskUnits="userSpaceOnUse"
          x="1657"
          y="68"
          width="8"
          height="8"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1661 76C1663.21 76 1665 74.2091 1665 72C1665 69.7909 1663.21 68 1661 68C1658.79 68 1657 69.7909 1657 72C1657 74.2091 1658.79 76 1661 76Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_26_832)">
          <g opacity="0.765509" filter="url(#filter6_f_26_832)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1659.75 73.5C1660.16 73.5 1660.5 73.1642 1660.5 72.75C1660.5 72.3358 1660.16 72 1659.75 72C1659.34 72 1659 72.3358 1659 72.75C1659 73.1642 1659.34 73.5 1659.75 73.5Z"
              fill="#304068"
            />
          </g>
          <g filter="url(#filter7_f_26_832)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1660.75 74.5C1661.16 74.5 1661.5 74.1642 1661.5 73.75C1661.5 73.3358 1661.16 73 1660.75 73C1660.34 73 1660 73.3358 1660 73.75C1660 74.1642 1660.34 74.5 1660.75 74.5Z"
              fill="#7484AD"
            />
          </g>
          <g filter="url(#filter8_f_26_832)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1661.67 71.0225C1662.13 71.0225 1662.49 70.6551 1662.49 70.202C1662.49 69.7488 1662.13 69.3815 1661.67 69.3815C1661.22 69.3815 1660.85 69.7488 1660.85 70.202C1660.85 70.6551 1661.22 71.0225 1661.67 71.0225Z"
              fill="#AFBCDE"
            />
          </g>
        </g>
        <g filter="url(#filter9_ii_26_832)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M324 1763H2998C2998 1789.05 2998 1802.07 2994.92 1812.7C2987.48 1838.39 2967.39 1858.48 2941.7 1865.92C2931.07 1869 2918.05 1869 2892 1869H430C403.954 1869 390.931 1869 380.299 1865.92C354.608 1858.48 334.521 1838.39 327.08 1812.7C324 1802.07 324 1789.05 324 1763V1763Z"
            fill="#1E1E1E"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1580.86 1809.3H1577.33V1785.95H1577.18L1567.52 1809.09H1564.33L1554.67 1785.95H1554.53V1809.3H1551V1779H1555.39L1565.84 1804.28H1566.01L1576.47 1779H1580.86V1809.3ZM1592.24 1806.57C1595.68 1806.57 1598.33 1804.15 1598.33 1801V1799.22L1592.49 1799.58C1589.55 1799.77 1587.87 1801.07 1587.87 1803.12C1587.87 1805.2 1589.62 1806.57 1592.24 1806.57ZM1591.42 1809.68C1587.08 1809.68 1584.16 1807.05 1584.16 1803.12C1584.16 1799.39 1587.03 1797.04 1592.07 1796.74L1598.33 1796.38V1794.56C1598.33 1791.89 1596.57 1790.3 1593.54 1790.3C1590.73 1790.3 1588.96 1791.62 1588.5 1793.76H1584.98C1585.23 1789.98 1588.46 1787.08 1593.63 1787.08C1598.75 1787.08 1601.98 1789.85 1601.98 1794.2V1809.3H1598.52V1805.54H1598.43C1597.13 1808.04 1594.36 1809.68 1591.42 1809.68ZM1624.26 1794.62H1620.69C1620.17 1792.25 1618.32 1790.3 1615.11 1790.3C1611.33 1790.3 1608.77 1793.42 1608.77 1798.38C1608.77 1803.46 1611.37 1806.46 1615.15 1806.46C1618.13 1806.46 1620.08 1804.89 1620.71 1802.26H1624.31C1623.74 1806.61 1620.08 1809.68 1615.13 1809.68C1609.08 1809.68 1605.05 1805.41 1605.05 1798.38C1605.05 1791.49 1609.06 1787.08 1615.09 1787.08C1620.55 1787.08 1623.8 1790.69 1624.26 1794.62ZM1639.17 1809.3H1627.73V1779H1639.22C1644.4 1779 1647.91 1782.02 1647.91 1786.56C1647.91 1789.71 1645.6 1792.65 1642.68 1793.17V1793.34C1646.8 1793.87 1649.44 1796.76 1649.44 1800.79C1649.44 1806.13 1645.62 1809.3 1639.17 1809.3ZM1631.51 1782.34V1792.06H1637.18C1641.65 1792.06 1644.09 1790.27 1644.09 1787C1644.09 1784 1642.03 1782.34 1638.36 1782.34H1631.51ZM1631.51 1805.96H1638.61C1643.16 1805.96 1645.56 1804.11 1645.56 1800.6C1645.56 1797.1 1643.08 1795.31 1638.25 1795.31H1631.51V1805.96ZM1661.71 1809.68C1655.66 1809.68 1651.59 1805.33 1651.59 1798.38C1651.59 1791.41 1655.66 1787.08 1661.71 1787.08C1667.73 1787.08 1671.81 1791.41 1671.81 1798.38C1671.81 1805.33 1667.73 1809.68 1661.71 1809.68ZM1661.71 1806.46C1665.57 1806.46 1668.09 1803.52 1668.09 1798.38C1668.09 1793.24 1665.57 1790.3 1661.71 1790.3C1657.84 1790.3 1655.3 1793.24 1655.3 1798.38C1655.3 1803.52 1657.84 1806.46 1661.71 1806.46ZM1684.03 1809.68C1677.98 1809.68 1673.91 1805.33 1673.91 1798.38C1673.91 1791.41 1677.98 1787.08 1684.03 1787.08C1690.06 1787.08 1694.13 1791.41 1694.13 1798.38C1694.13 1805.33 1690.06 1809.68 1684.03 1809.68ZM1684.03 1806.46C1687.89 1806.46 1690.41 1803.52 1690.41 1798.38C1690.41 1793.24 1687.89 1790.3 1684.03 1790.3C1680.17 1790.3 1677.63 1793.24 1677.63 1798.38C1677.63 1803.52 1680.17 1806.46 1684.03 1806.46ZM1701.15 1797.16L1710.8 1787.46H1715.23L1705.76 1796.89L1715.53 1809.3H1711.29L1703.18 1799.14L1701.15 1801.07V1809.3H1697.49V1779H1701.15V1797.16ZM1746.25 1809.3L1743.21 1800.63H1731.16L1728.11 1809.3H1724.14L1735.31 1779H1739.05L1750.22 1809.3H1746.25ZM1737.12 1783.6L1732.27 1797.41H1742.1L1737.25 1783.6H1737.12ZM1752.81 1809.3V1787.46H1756.46V1809.3H1752.81ZM1754.63 1783.79C1753.4 1783.79 1752.37 1782.76 1752.37 1781.52C1752.37 1780.26 1753.4 1779.25 1754.63 1779.25C1755.89 1779.25 1756.92 1780.26 1756.92 1781.52C1756.92 1782.76 1755.89 1783.79 1754.63 1783.79ZM1760.9 1809.3V1787.46H1764.34V1791.03H1764.42C1765.14 1788.62 1767.15 1787.08 1769.71 1787.08C1770.34 1787.08 1770.89 1787.19 1771.18 1787.23V1790.78C1770.89 1790.67 1770.11 1790.57 1769.23 1790.57C1766.4 1790.57 1764.55 1792.61 1764.55 1795.69V1809.3H1760.9Z"
          fill="url(#paint4_linear_26_832)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 1843.41C8 1834.18 8 1829.55 8 1827.25C8 1826 9.00736 1825 10.25 1825H3311.75C3312.99 1825 3314 1826 3314 1827.24C3314 1829.56 3314 1834.21 3314 1843.46C3314 1844.62 3313.35 1845.49 3313.01 1845.63C3268.4 1861.62 3184.34 1897 2944.62 1897C2787.55 1897 2540.93 1897 2384.25 1897C2070.33 1897 2159.92 1897 1846.5 1897C1533.1 1897 1261.69 1897 948.747 1897C792.012 1897 535.214 1897 379.368 1897C144.532 1897 63.0461 1865.94 9.01788 1845.63C8 1844.98 8 1844.4 8 1843.41Z"
          fill="url(#paint5_linear_26_832)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 1843.41C8 1834.18 8 1829.55 8 1827.25C8 1826 9.00736 1825 10.25 1825H3311.75C3312.99 1825 3314 1826 3314 1827.24C3314 1829.56 3314 1834.21 3314 1843.46C3314 1844.62 3313.35 1845.49 3313.01 1845.63C3268.4 1861.62 3184.34 1897 2944.62 1897C2787.55 1897 2540.93 1897 2384.25 1897C2070.33 1897 2159.92 1897 1846.5 1897C1533.1 1897 1261.69 1897 948.747 1897C792.012 1897 535.214 1897 379.368 1897C144.532 1897 63.0461 1865.94 9.01788 1845.63C8 1844.98 8 1844.4 8 1843.41Z"
          fill="black"
          fill-opacity="0.04"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 1843.41C8 1834.18 8 1829.55 8 1827.25C8 1826 9.00736 1825 10.25 1825H3311.75C3312.99 1825 3314 1826 3314 1827.24C3314 1829.56 3314 1834.21 3314 1843.46C3314 1844.62 3313.35 1845.49 3313.01 1845.63C3268.4 1861.62 3184.34 1897 2944.62 1897C2787.55 1897 2540.93 1897 2384.25 1897C2070.33 1897 2159.92 1897 1846.5 1897C1533.1 1897 1261.69 1897 948.747 1897C792.012 1897 535.214 1897 379.368 1897C144.532 1897 63.0461 1865.94 9.01788 1845.63C8 1844.98 8 1844.4 8 1843.41Z"
          fill="url(#paint6_radial_26_832)"
          fill-opacity="0.04"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 1843.41C8 1834.18 8 1829.55 8 1827.25C8 1826 9.00736 1825 10.25 1825H3311.75C3312.99 1825 3314 1826 3314 1827.24C3314 1829.56 3314 1834.21 3314 1843.46C3314 1844.62 3313.35 1845.49 3313.01 1845.63C3268.4 1861.62 3184.34 1897 2944.62 1897C2787.55 1897 2540.93 1897 2384.25 1897C2070.33 1897 2159.92 1897 1846.5 1897C1533.1 1897 1261.69 1897 948.747 1897C792.012 1897 535.214 1897 379.368 1897C144.532 1897 63.0461 1865.94 9.01788 1845.63C8 1844.98 8 1844.4 8 1843.41Z"
          fill="url(#paint7_radial_26_832)"
          fill-opacity="0.02"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 1843.41C8 1834.18 8 1829.55 8 1827.25C8 1826 9.00736 1825 10.25 1825H3311.75C3312.99 1825 3314 1826 3314 1827.24C3314 1829.56 3314 1834.21 3314 1843.46C3314 1844.62 3313.35 1845.49 3313.01 1845.63C3268.4 1861.62 3184.34 1897 2944.62 1897C2787.55 1897 2540.93 1897 2384.25 1897C2070.33 1897 2159.92 1897 1846.5 1897C1533.1 1897 1261.69 1897 948.747 1897C792.012 1897 535.214 1897 379.368 1897C144.532 1897 63.0461 1865.94 9.01788 1845.63C8 1844.98 8 1844.4 8 1843.41Z"
          fill="white"
          fill-opacity="0.02"
        />
        <g filter="url(#filter10_d_26_832)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.6211 1855L3286.78 1855L3283.87 1856H37.5103L34.6211 1855Z"
            fill="black"
            fill-opacity="0.3"
          />
        </g>
        <g filter="url(#filter11_ddi_26_832)">
          <path
            d="M8 1827.25C8 1826.01 9.00736 1825 10.25 1825H3311.75C3312.99 1825 3314 1826.01 3314 1827.25V1843.88C3314 1844.5 3313.5 1845 3312.88 1845H9.12498C8.50366 1845 8 1844.5 8 1843.88V1827.25Z"
            fill="#F6F6FF"
          />
          <path
            d="M8 1827.25C8 1826.01 9.00736 1825 10.25 1825H3311.75C3312.99 1825 3314 1826.01 3314 1827.25V1843.88C3314 1844.5 3313.5 1845 3312.88 1845H9.12498C8.50366 1845 8 1844.5 8 1843.88V1827.25Z"
            fill="url(#paint8_linear_26_832)"
            fill-opacity="0.9"
          />
          <path
            d="M8 1827.25C8 1826.01 9.00736 1825 10.25 1825H3311.75C3312.99 1825 3314 1826.01 3314 1827.25V1843.88C3314 1844.5 3313.5 1845 3312.88 1845H9.12498C8.50366 1845 8 1844.5 8 1843.88V1827.25Z"
            fill="black"
            fill-opacity="0.02"
          />
          <path
            d="M8 1827.25C8 1826.01 9.00736 1825 10.25 1825H3311.75C3312.99 1825 3314 1826.01 3314 1827.25V1843.88C3314 1844.5 3313.5 1845 3312.88 1845H9.12498C8.50366 1845 8 1844.5 8 1843.88V1827.25Z"
            fill="url(#paint9_linear_26_832)"
            fill-opacity="0.2"
          />
          <path
            d="M8 1827.25C8 1826.01 9.00736 1825 10.25 1825H3311.75C3312.99 1825 3314 1826.01 3314 1827.25V1843.88C3314 1844.5 3313.5 1845 3312.88 1845H9.12498C8.50366 1845 8 1844.5 8 1843.88V1827.25Z"
            fill="url(#paint10_radial_26_832)"
          />
          <path
            d="M8 1827.25C8 1826.01 9.00736 1825 10.25 1825H3311.75C3312.99 1825 3314 1826.01 3314 1827.25V1843.88C3314 1844.5 3313.5 1845 3312.88 1845H9.12498C8.50366 1845 8 1844.5 8 1843.88V1827.25Z"
            fill="url(#paint11_radial_26_832)"
          />
        </g>
        <g filter="url(#filter12_i_26_832)">
          <path
            d="M1378 1827.99C1378 1826.34 1379.34 1825 1381 1825H1943C1944.66 1825 1946 1826.34 1946 1828C1946 1832.45 1946 1840.74 1946 1844.99C1938.6 1848.57 1921.43 1853 1910 1853C1898.57 1853 1427.35 1853 1414.22 1853C1401.09 1853 1381 1846.94 1378 1845.03C1377.99 1842.58 1377.99 1832.95 1378 1827.99Z"
            fill="url(#paint12_linear_26_832)"
          />
          <path
            d="M1378 1827.99C1378 1826.34 1379.34 1825 1381 1825H1943C1944.66 1825 1946 1826.34 1946 1828C1946 1832.45 1946 1840.74 1946 1844.99C1938.6 1848.57 1921.43 1853 1910 1853C1898.57 1853 1427.35 1853 1414.22 1853C1401.09 1853 1381 1846.94 1378 1845.03C1377.99 1842.58 1377.99 1832.95 1378 1827.99Z"
            fill="black"
            fill-opacity="0.05"
          />
        </g>
        <g filter="url(#filter13_i_26_832)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1103.5 1882C1113.72 1882 1122 1880.43 1122 1878.5C1122 1876.57 1113.72 1875 1103.5 1875C1093.28 1875 1085 1876.57 1085 1878.5C1085 1880.43 1093.28 1882 1103.5 1882Z"
            fill="#202125"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1103.5 1880C1112.61 1880 1120 1878.88 1120 1877.5C1120 1876.12 1112.61 1875 1103.5 1875C1094.39 1875 1087 1876.12 1087 1877.5C1087 1878.88 1094.39 1880 1103.5 1880Z"
          fill="url(#paint13_angular_26_832)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1103.5 1878C1105.99 1878 1108 1877.78 1108 1877.5C1108 1877.22 1105.99 1877 1103.5 1877C1101.01 1877 1099 1877.22 1099 1877.5C1099 1877.78 1101.01 1878 1103.5 1878Z"
          fill="#27272C"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M111.102 1872.84C121.193 1874.44 129.514 1874.85 129.687 1873.76C129.859 1872.67 121.819 1870.49 111.727 1868.89C101.636 1867.3 93.315 1866.88 93.1422 1867.98C92.9694 1869.07 101.01 1871.25 111.102 1872.84Z"
          fill="#202125"
          fill-opacity="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M111.28 1871.72C120.28 1873.14 127.677 1873.67 127.8 1872.89C127.923 1872.11 120.727 1870.32 111.727 1868.89C102.726 1867.47 95.3296 1866.94 95.2062 1867.72C95.0828 1868.5 102.279 1870.29 111.28 1871.72Z"
          fill="url(#paint14_angular_26_832)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M111.459 1870.59C113.913 1870.98 115.923 1871.16 115.948 1871.01C115.973 1870.85 114.003 1870.41 111.548 1870.02C109.093 1869.63 107.084 1869.45 107.059 1869.6C107.034 1869.76 109.004 1870.2 111.459 1870.59Z"
          fill="#27272C"
        />
        <g filter="url(#filter14_i_26_832)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2218.5 1882C2228.72 1882 2237 1880.43 2237 1878.5C2237 1876.57 2228.72 1875 2218.5 1875C2208.28 1875 2200 1876.57 2200 1878.5C2200 1880.43 2208.28 1882 2218.5 1882Z"
            fill="#202125"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2218.5 1880C2227.61 1880 2235 1878.88 2235 1877.5C2235 1876.12 2227.61 1875 2218.5 1875C2209.39 1875 2202 1876.12 2202 1877.5C2202 1878.88 2209.39 1880 2218.5 1880Z"
          fill="url(#paint15_angular_26_832)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2218.5 1878C2220.99 1878 2223 1877.78 2223 1877.5C2223 1877.22 2220.99 1877 2218.5 1877C2216.01 1877 2214 1877.22 2214 1877.5C2214 1877.78 2216.01 1878 2218.5 1878Z"
          fill="#27272C"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3207.9 1872.84C3217.99 1871.25 3226.03 1869.07 3225.86 1867.98C3225.68 1866.88 3217.36 1867.3 3207.27 1868.89C3197.18 1870.49 3189.14 1872.67 3189.31 1873.76C3189.49 1874.85 3197.81 1874.44 3207.9 1872.84Z"
          fill="#202125"
          fill-opacity="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3207.72 1871.72C3216.72 1870.29 3223.92 1868.5 3223.79 1867.72C3223.67 1866.94 3216.27 1867.47 3207.27 1868.89C3198.27 1870.32 3191.08 1872.11 3191.2 1872.89C3191.32 1873.67 3198.72 1873.14 3207.72 1871.72Z"
          fill="url(#paint16_angular_26_832)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3207.54 1870.59C3210 1870.2 3211.97 1869.76 3211.94 1869.6C3211.92 1869.45 3209.91 1869.63 3207.45 1870.02C3205 1870.41 3203.03 1870.85 3203.05 1871.01C3203.08 1871.16 3205.09 1870.98 3207.54 1870.59Z"
          fill="#27272C"
        />
        <g clip-path="url(#clip0_26_832)">
          <rect
            x="382"
            y="123"
            width="2560"
            height="1600"
            fill={`url(#${name}pattern0)`}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_26_832"
            x="0.69031"
            y="1854.69"
            width="3312.62"
            height="86.6194"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8.15485"
              result="effect1_foregroundBlur_26_832"
            />
          </filter>
          <filter
            id="filter1_f_26_832"
            x="88.6903"
            y="1872.69"
            width="3136.62"
            height="46.6194"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8.15485"
              result="effect1_foregroundBlur_26_832"
            />
          </filter>
          <filter
            id="filter2_f_26_832"
            x="248.69"
            y="1872.69"
            width="2816.62"
            height="46.6194"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8.15485"
              result="effect1_foregroundBlur_26_832"
            />
          </filter>
          <filter
            id="filter3_i_26_832"
            x="308"
            y="0"
            width="2706"
            height="1885"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_26_832"
            />
          </filter>
          <filter
            id="filter4_ii_26_832"
            x="317"
            y="9"
            width="2688"
            height="1868"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.334579 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_26_832"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_26_832"
              result="effect2_innerShadow_26_832"
            />
          </filter>
          <filter
            id="filter5_ddd_26_832"
            x="320"
            y="12.5"
            width="2682"
            height="1861.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.51 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_26_832"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.09 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_26_832"
              result="effect2_dropShadow_26_832"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.5" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_dropShadow_26_832"
              result="effect3_dropShadow_26_832"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect3_dropShadow_26_832"
              result="shape"
            />
          </filter>
          <filter
            id="filter6_f_26_832"
            x="1657.64"
            y="70.6409"
            width="4.21828"
            height="4.21828"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.67957"
              result="effect1_foregroundBlur_26_832"
            />
          </filter>
          <filter
            id="filter7_f_26_832"
            x="1657.83"
            y="70.8254"
            width="5.84925"
            height="5.84925"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1.08731"
              result="effect1_foregroundBlur_26_832"
            />
          </filter>
          <filter
            id="filter8_f_26_832"
            x="1659.22"
            y="67.7505"
            width="4.90256"
            height="4.90293"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.815485"
              result="effect1_foregroundBlur_26_832"
            />
          </filter>
          <filter
            id="filter9_ii_26_832"
            x="324"
            y="1763"
            width="2674"
            height="106"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-2" dy="-1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_26_832"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="-1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_26_832"
              result="effect2_innerShadow_26_832"
            />
          </filter>
          <filter
            id="filter10_d_26_832"
            x="34.6211"
            y="1855"
            width="3252.16"
            height="2"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_26_832"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_26_832"
              result="shape"
            />
          </filter>
          <filter
            id="filter11_ddi_26_832"
            x="6"
            y="1825"
            width="3310"
            height="24"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_26_832"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_26_832"
              result="effect2_dropShadow_26_832"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_26_832"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect3_innerShadow_26_832"
            />
          </filter>
          <filter
            id="filter12_i_26_832"
            x="1377.99"
            y="1825"
            width="568.008"
            height="29"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_26_832"
            />
          </filter>
          <filter
            id="filter13_i_26_832"
            x="1085"
            y="1874"
            width="37"
            height="8"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.32603 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_26_832"
            />
          </filter>
          <filter
            id="filter14_i_26_832"
            x="2200"
            y="1874"
            width="37"
            height="8"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.32603 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_26_832"
            />
          </filter>
          <pattern
            id={`${name}pattern0`}
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref={`#${name}`}
              transform="matrix(0.000813802 0 0 0.00130208 -0.0558268 0)"
            />
          </pattern>
          <linearGradient
            id="paint0_linear_26_832"
            x1="380.052"
            y1="9"
            x2="380.052"
            y2="1788.41"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1D1D1D" />
            <stop offset="1" stop-color="#1A1A1A" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_26_832"
            x1="-964.717"
            y1="953.653"
            x2="749.388"
            y2="3427.22"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stop-color="#000004" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_26_832"
            x1="1656"
            y1="67"
            x2="1656"
            y2="77"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stop-color="#353535" />
          </linearGradient>
          <radialGradient
            id="paint3_radial_26_832"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1661 68) rotate(90) scale(8)"
          >
            <stop stop-color="#2B2F3A" />
            <stop offset="1" stop-color="#0E0E0F" />
          </radialGradient>
          <linearGradient
            id="paint4_linear_26_832"
            x1="1551"
            y1="1779"
            x2="1551"
            y2="1809.68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A9BA0" />
            <stop offset="1" stop-color="#8D8E95" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_26_832"
            x1="8"
            y1="1825"
            x2="8"
            y2="1897"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#616266" />
            <stop offset="0.417273" stop-color="#75767A" />
            <stop offset="1" stop-color="#2A2B30" />
          </linearGradient>
          <radialGradient
            id="paint6_radial_26_832"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1661 1609.58) rotate(140.368) scale(1231.18 23016.6)"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint7_radial_26_832"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1661 1609.58) rotate(141.765) scale(951.823 16753)"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0.01" />
          </radialGradient>
          <linearGradient
            id="paint8_linear_26_832"
            x1="16.6426"
            y1="1844.97"
            x2="3314"
            y2="1844.97"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#37373B" />
            <stop offset="0.00623081" stop-color="#74767A" />
            <stop offset="0.0160815" stop-color="#A9A9AF" />
            <stop offset="0.0258628" stop-color="#D3D3D9" />
            <stop offset="0.042233" stop-color="#C8C9CE" />
            <stop offset="0.0492556" stop-color="#C8C8CD" />
            <stop offset="0.0824039" stop-color="#BEBFC4" />
            <stop offset="0.344542" stop-color="#CCCCD2" />
            <stop offset="0.501117" stop-color="#CECED3" />
            <stop offset="0.749547" stop-color="#BDBFC3" />
            <stop offset="0.925492" stop-color="#BCBDC1" />
            <stop offset="0.951152" stop-color="#CCCDD1" />
            <stop offset="0.973895" stop-color="#D1D2D7" />
            <stop offset="0.981928" stop-color="#BABCC0" />
            <stop offset="0.989211" stop-color="#7A7B80" />
            <stop offset="0.993824" stop-color="#4F5055" />
            <stop offset="1" stop-color="#2F3034" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_26_832"
            x1="-4382.53"
            y1="1802.42"
            x2="-4382.51"
            y2="1859.03"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.3" />
            <stop offset="1" stop-color="white" stop-opacity="0.01" />
          </linearGradient>
          <radialGradient
            id="paint10_radial_26_832"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(3314 1825) rotate(177.012) scale(68.5286 31.1859)"
          >
            <stop stop-opacity="0.03" />
            <stop offset="1" stop-opacity="0.01" />
          </radialGradient>
          <radialGradient
            id="paint11_radial_26_832"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1661 1825) rotate(90) scale(578.811 90006.8)"
          >
            <stop stop-color="white" stop-opacity="0.299026" />
            <stop offset="1" stop-color="white" stop-opacity="0.01" />
          </radialGradient>
          <linearGradient
            id="paint12_linear_26_832"
            x1="1946"
            y1="1825"
            x2="1377.99"
            y2="1825"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#505154" />
            <stop offset="0.0750433" stop-color="#D2D3D8" />
            <stop offset="0.488433" stop-color="#C8C9CF" />
            <stop offset="0.937226" stop-color="#CACBD1" />
            <stop offset="1" stop-color="#505154" />
          </linearGradient>
          <radialGradient
            id="paint13_angular_26_832"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1103.5 1877.5) scale(16.5 2.5)"
          >
            <stop stop-color="#727377" />
            <stop offset="0.0585773" stop-color="#6D6E72" />
            <stop offset="0.0761605" stop-color="#545558" />
            <stop offset="0.417729" stop-color="#5A5C60" />
            <stop offset="0.447856" stop-color="#6D6E73" />
            <stop offset="0.500824" stop-color="#6E6F74" />
            <stop offset="0.561383" stop-color="#6D6E73" />
            <stop offset="0.601299" stop-color="#5F6064" />
            <stop offset="0.895624" stop-color="#545558" />
            <stop offset="0.944464" stop-color="#6D6E73" />
          </radialGradient>
          <radialGradient
            id="paint14_angular_26_832"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(111.503 1870.31) rotate(9) scale(16.5 1.42857)"
          >
            <stop offset="0.0275346" stop-color="#6D6E72" />
            <stop offset="0.0445886" stop-color="#545558" />
            <stop offset="0.428934" stop-color="#323437" />
            <stop offset="0.482678" stop-color="#525359" />
            <stop offset="0.548783" stop-color="#525359" />
            <stop offset="0.564882" stop-color="#46474B" />
            <stop offset="0.867182" stop-color="#46474B" />
            <stop offset="0.919688" stop-color="#525359" />
          </radialGradient>
          <radialGradient
            id="paint15_angular_26_832"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(2218.5 1877.5) scale(16.5 2.5)"
          >
            <stop stop-color="#727377" />
            <stop offset="0.0585773" stop-color="#6D6E72" />
            <stop offset="0.0761605" stop-color="#545558" />
            <stop offset="0.417729" stop-color="#5A5C60" />
            <stop offset="0.447856" stop-color="#6D6E73" />
            <stop offset="0.500824" stop-color="#6E6F74" />
            <stop offset="0.561383" stop-color="#6D6E73" />
            <stop offset="0.601299" stop-color="#5F6064" />
            <stop offset="0.895624" stop-color="#545558" />
            <stop offset="0.944464" stop-color="#6D6E73" />
          </radialGradient>
          <radialGradient
            id="paint16_angular_26_832"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(3207.5 1870.31) rotate(-9) scale(16.5 1.42857)"
          >
            <stop offset="0.0275346" stop-color="#6D6E72" />
            <stop offset="0.0445886" stop-color="#545558" />
            <stop offset="0.428934" stop-color="#323437" />
            <stop offset="0.482678" stop-color="#525359" />
            <stop offset="0.548783" stop-color="#525359" />
            <stop offset="0.564882" stop-color="#46474B" />
            <stop offset="0.867182" stop-color="#46474B" />
            <stop offset="0.919688" stop-color="#525359" />
          </radialGradient>
          <clipPath id="clip0_26_832">
            <rect
              width="2560"
              height="1600"
              fill="white"
              transform="translate(382 123)"
            />
          </clipPath>
          {/* <image id="image0_26_832" width="1366" height="768" href={imgPath} /> */}
        </defs>
      </svg>
    </div>
  );
}
