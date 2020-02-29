import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Test = ({children}) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <div
      css={css`
        padding: 2em;
        font-size: 24px;
        &:hover {
          color: 'brown';
        }
      `}
    >
      <div>
      <img
        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        alt="Group of pandas eating bamboo"
      />
    </div>
    </div>
    <Link
      to={`/`}
      css={css`
        float: right;
      `}
    >
      Home
    </Link>
    {children}
  </div>
)

export default Test
