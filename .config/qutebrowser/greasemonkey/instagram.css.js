// ==UserScript==
// @name    Userstyle (instagram.css)
// @include    *instagram.com/*
// ==/UserScript==
GM_addStyle(`@-moz-document domain('instagram.com') {
  ._aa4d {
    color-scheme: dark;
    /* Sidebar */
    /* Story background */
    /* Story progress bar */
    /* Story seen / not seen ring */
    /* Posts */
    /* Icons */
    /* Share box */
    /* Toggle sliders */
    /* Log In With Facebook text */
    /* Excluded:  - _9ys7, _9_1f, _9ys8 (verified icon) */
    /* Custom icons */
    /* Instagram text logo */
    /* 2fa lock icon */
    /* "All caught up" icon */
    /* Post swipe icons */
    /* Inside primary buttons */
    /* Secondary buttons */
    /* Profile banner */
    /* Dialog overlay */
    /* Settings */
    /* Settings saved toast */
    /* Bloks */
    /* Map pop-ups */
    /* Scrollbar */
  }
  ._aa4d ::selection {
    background-color: rgba(137, 180, 250, 0.3);
  }
  ._aa4d input::placeholder,
  ._aa4d textarea::placeholder {
    color: #a6adc8 !important;
  }
  ._aa4d,
  ._aa4d .x1qjc9v5,
  ._aa4d .x9f619,
  ._aa4d .x78zum5,
  ._aa4d .xdt5ytf,
  ._aa4d .x1iyjqo2,
  ._aa4d .xl56j7k {
    --web-always-black: 17, 17, 27;
    --ig-primary-icon: 205, 214, 244;
    --web-always-white: 205, 214, 244;
    --always-white: 205, 214, 244;
    --overlay-alpha-80: rgba(17, 17, 27, 0.5);
    --always-dark-overlay: rgba(49, 50, 68, 0.5);
    --grey-9: 17, 17, 27;
    --ig-primary-background: 30, 30, 46;
    --ig-secondary-background: 49, 50, 68;
    --ig-banner-background: 17, 17, 27;
    --ig-highlight-background: 49, 50, 68;
    --ig-elevated-background: 17, 17, 27;
    --ig-elevated-highlight-background: 49, 50, 68;
    --ig-hover-overlay: 205, 214, 244, 0.1;
    --hover-overlay: rgba(49, 50, 68, 0.2);
    --ig-text-on-color: 17, 17, 27;
    --ig-badge: 137, 180, 250;
    --ig-primary-button: 137, 180, 250;
    --ig-primary-button-hover: rgba(137, 180, 250, 0.8);
    --ig-secondary-button-background: 49, 50, 68;
    --ig-secondary-button-hover: 69, 71, 90;
    --ig-secondary-button: 205, 214, 244;
    --ig-primary-text: 205, 214, 244;
    --ig-secondary-text: 166, 173, 200;
    --ig-tertiary-text: 166, 173, 200;
    --wbloks-primary-text: #cdd6f4;
    --ig-text-on-media: 205, 214, 244;
    --ig-separator: 49, 50, 68;
    --chat-admin-text-color: 166, 173, 200;
    --ig-elevated-separator: 49, 50, 68;
    --post-separator: 108, 112, 134;
    --ig-stroke: 108, 112, 134;
    --grey-2: 108, 112, 134;
    --ig-link: 137, 180, 250;
    --ig-error-or-destructive: 235, 160, 172;
    --ig-success: 166, 227, 161;
    --blue-2: 137, 180, 250;
    --ig-close-friends-refreshed: 166, 227, 161;
    --ig-text-input-border-hover-prism: 69, 71, 90;
    --ig-toggle-outline-prism: 205, 214, 244;
    --ig-toggle-background-on-prism: 205, 214, 244;
    --ig-stroke-prism: 17, 17, 27;
    --barcelona-logo: 205, 214, 244;
    scrollbar-color: #89b4fa #11111b;
  }
  ._aa4d #splash-screen {
    background-color: #1e1e2e !important;
  }
  ._aa4d .x1xgvd2v {
    background-color: #11111b !important;
  }
  ._aa4d .x1xgvd2v[style="transform: translateX(0px);"] {
    background-color: #181825 !important;
  }
  ._aa4d .x1zvrr1 {
    background-color: #181825;
  }
  ._aa4d svg[aria-label="Loading..."] {
    stroke: #cdd6f4;
  }
  ._aa4d .x5qyhuo {
    background-color: #1e1e2e;
  }
  ._aa4d ._ac3p {
    background-color: #89b4fa !important;
  }
  ._aa4d button:has(canvas + span > img[alt$="'s profile picture"]) canvas {
    display: none;
  }
  ._aa4d button:has(canvas + span > img[alt$="'s profile picture"]) span {
    outline-style: solid;
    outline-offset: 0.15rem;
  }
  ._aa4d button:has(canvas + span > img[alt$="'s profile picture"])[aria-label^="Story by"][aria-label$="not seen"] span {
    outline-color: #89b4fa;
    outline-width: 0.2rem;
  }
  ._aa4d button:has(canvas + span > img[alt$="'s profile picture"])[aria-label^="Story by"]:not([aria-label$="not seen"]) span {
    outline-color: #585b70;
    outline-width: 0.075rem;
  }
  ._aa4d ._aggc {
    background-color: #181825;
    border-color: #6c7086 !important;
    border-radius: var(--modal-border-radius);
    box-shadow: 0 3px 5px -1px rgba(17, 17, 27, 0.8);
    box-sizing: border-box;
  }
  ._aa4d ._aatc ._aasi,
  ._aa4d ._ae1i,
  ._aa4d ._aggc textarea.xvbhtw8 {
    background-color: #181825;
  }
  ._aa4d svg[aria-label="Unlike"] {
    fill: #89b4fa;
  }
  ._aa4d svg[aria-label="Close"] {
    color: #cdd6f4;
  }
  ._aa4d svg[aria-label="Verified"] {
    fill: #89b4fa;
  }
  ._aa4d .xzloghq {
    background-color: #313244;
    color: #cdd6f4 !important;
  }
  ._aa4d .xzloghq:hover {
    color: #181825 !important;
    background-color: #89b4fa !important;
  }
  ._aa4d .xk5f4mz {
    background-color: #181825;
  }
  ._aa4d .xk5f4mz:hover {
    background-color: #89b4fa;
  }
  ._aa4d .x3nfvp2 {
    color: #cdd6f4 !important;
  }
  ._aa4d .x3nfvp2:hover {
    color: #11111b;
  }
  ._aa4d .x1r7x56h {
    background-color: #89b4fa;
  }
  ._aa4d .x100vrsf {
    background-color: #313244;
  }
  ._aa4d .xw4jnvo {
    background-color: #7f849c;
  }
  ._aa4d .x1psfjxj {
    background-color: #181825;
  }
  ._aa4d span[data-bloks-name="bk.components.TextSpan"] {
    color: #89b4fa !important;
  }
  ._aa4d .xs7f9wi {
    background-color: #181825 !important;
  }
  ._aa4d .x1d72o {
    background-color: #313244;
  }
  ._aa4d ._ab37 {
    color: #89b4fa;
  }
  ._aa4d [style*='background-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png")'],
  ._aa4d ._9zkj,
  ._aa4d ._a3ds,
  ._aa4d ._a3dt,
  ._aa4d ._a3du,
  ._aa4d ._a3dv,
  ._aa4d ._a3dw,
  ._aa4d ._9-b3,
  ._aa4d ._9znl,
  ._aa4d ._9z-6,
  ._aa4d ._a3dx,
  ._aa4d ._a3dy,
  ._aa4d ._a3dz,
  ._aa4d ._a3d-,
  ._aa4d ._a3d_,
  ._aa4d ._a3e0,
  ._aa4d ._9zm4,
  ._aa4d ._a3e1,
  ._aa4d ._a3e2,
  ._aa4d ._a3e3,
  ._aa4d ._a3e4,
  ._aa4d ._a3e5,
  ._aa4d ._a3e6,
  ._aa4d ._a3e7,
  ._aa4d ._a3e8,
  ._aa4d ._a3e9,
  ._aa4d ._a3ea,
  ._aa4d ._9_57,
  ._aa4d ._9_n5,
  ._aa4d ._9-y3,
  ._aa4d ._a3eb,
  ._aa4d ._a3ec,
  ._aa4d ._a3ed,
  ._aa4d ._a3ee,
  ._aa4d ._9zlu,
  ._aa4d ._9-yp,
  ._aa4d ._a3ef,
  ._aa4d ._a3eg,
  ._aa4d ._9_wm,
  ._aa4d ._a3eh,
  ._aa4d ._a3ei,
  ._aa4d ._9-j_,
  ._aa4d ._a3ej,
  ._aa4d ._a3ek,
  ._aa4d ._9_ij,
  ._aa4d ._9_d_,
  ._aa4d ._9_e1,
  ._aa4d ._9-mm,
  ._aa4d ._9_cx,
  ._aa4d ._9zm0,
  ._aa4d ._9zfi,
  ._aa4d ._9-ub,
  ._aa4d ._a3el,
  ._aa4d ._9-7-,
  ._aa4d ._9-1a,
  ._aa4d ._a3em,
  ._aa4d ._9zrp,
  ._aa4d ._a3en,
  ._aa4d ._9zz9,
  ._aa4d ._a3eo,
  ._aa4d ._9zmr,
  ._aa4d ._9-8d,
  ._aa4d ._9zhi,
  ._aa4d ._a3ep,
  ._aa4d ._9zs0,
  ._aa4d ._9-j-,
  ._aa4d ._a3eq,
  ._aa4d ._9zli,
  ._aa4d ._9_4y,
  ._aa4d ._9zm2,
  ._aa4d ._9zfj,
  ._aa4d ._9zlg,
  ._aa4d ._a3er,
  ._aa4d ._9-lv,
  ._aa4d ._9_ug,
  ._aa4d ._9_sh,
  ._aa4d ._9_sj,
  ._aa4d ._9-k0,
  ._aa4d ._9z-c,
  ._aa4d ._9_35,
  ._aa4d ._9_hh,
  ._aa4d ._a3es,
  ._aa4d ._a3et,
  ._aa4d ._a3eu,
  ._aa4d ._9-v-,
  ._aa4d ._9_4d,
  ._aa4d ._9zlh,
  ._aa4d ._a3ev,
  ._aa4d ._a3ew,
  ._aa4d ._a3ex,
  ._aa4d ._a3ey,
  ._aa4d ._9_7m,
  ._aa4d ._9_fv,
  ._aa4d ._a3ez,
  ._aa4d ._9-zf,
  ._aa4d ._9-zg,
  ._aa4d ._9-ze,
  ._aa4d ._a9fa,
  ._aa4d ._9-zh,
  ._aa4d ._9-zi,
  ._aa4d ._9-zj,
  ._aa4d ._9-zk,
  ._aa4d ._9-zl,
  ._aa4d ._9-zm,
  ._aa4d ._9-zn,
  ._aa4d ._9-zo,
  ._aa4d ._9-zp,
  ._aa4d ._9-zq,
  ._aa4d ._9-zr,
  ._aa4d ._9-zs,
  ._aa4d ._9-zt,
  ._aa4d ._a3op,
  ._aa4d ._a3oq,
  ._aa4d ._9-zu,
  ._aa4d ._9-zv,
  ._aa4d ._9-zw,
  ._aa4d ._9-zx,
  ._aa4d ._9-zy,
  ._aa4d ._9-zz,
  ._aa4d ._9-z-,
  ._aa4d ._a3or,
  ._aa4d ._a3ot,
  ._aa4d ._a3os,
  ._aa4d ._9zs1,
  ._aa4d ._9zs2,
  ._aa4d ._9-z_,
  ._aa4d ._9--0,
  ._aa4d ._9--1,
  ._aa4d ._9--2,
  ._aa4d ._9--3,
  ._aa4d ._9--4,
  ._aa4d ._9--5,
  ._aa4d ._9--6,
  ._aa4d ._9--7,
  ._aa4d ._9--f,
  ._aa4d ._9--8,
  ._aa4d ._9--9,
  ._aa4d ._9--a,
  ._aa4d ._9--b,
  ._aa4d ._9--c,
  ._aa4d ._9--d,
  ._aa4d ._9--e,
  ._aa4d ._a3ou,
  ._aa4d ._9--g,
  ._aa4d ._9--h,
  ._aa4d ._9--i,
  ._aa4d ._9--j,
  ._aa4d ._9--l,
  ._aa4d ._9--k,
  ._aa4d ._9--m,
  ._aa4d ._9--n,
  ._aa4d ._9--o,
  ._aa4d ._9--p,
  ._aa4d ._9--q,
  ._aa4d ._a3ov,
  ._aa4d ._9--s,
  ._aa4d ._9--r,
  ._aa4d ._9--t,
  ._aa4d ._9--u,
  ._aa4d ._9--v,
  ._aa4d ._9--x,
  ._aa4d ._9--y,
  ._aa4d ._9--w,
  ._aa4d ._9--z,
  ._aa4d ._9--_,
  ._aa4d ._9-_0,
  ._aa4d ._9-_1,
  ._aa4d ._9-_2,
  ._aa4d ._9-_3,
  ._aa4d ._9---,
  ._aa4d ._9-_4,
  ._aa4d ._9-_5,
  ._aa4d ._9-_6,
  ._aa4d ._9-_7,
  ._aa4d ._a3wy,
  ._aa4d ._9-_8,
  ._aa4d ._9-_9,
  ._aa4d ._a3ow,
  ._aa4d ._9-_a,
  ._aa4d ._9-_b,
  ._aa4d ._9-_c,
  ._aa4d ._9-_d,
  ._aa4d ._9-_e,
  ._aa4d ._9-_f,
  ._aa4d ._9-_g,
  ._aa4d ._9-_h,
  ._aa4d ._9-_i,
  ._aa4d ._9-_j,
  ._aa4d ._9-_k,
  ._aa4d ._9-_l,
  ._aa4d ._9-_m,
  ._aa4d ._9-_n,
  ._aa4d ._9-_o,
  ._aa4d ._a3ox,
  ._aa4d ._9-_p,
  ._aa4d ._9-_q,
  ._aa4d ._a9fb,
  ._aa4d ._9-_t,
  ._aa4d ._9-_r,
  ._aa4d ._9-_s,
  ._aa4d ._a93g,
  ._aa4d ._9-_u,
  ._aa4d ._9-_v,
  ._aa4d ._a9fc,
  ._aa4d ._9-_w,
  ._aa4d ._9-_x,
  ._aa4d ._9-_y,
  ._aa4d ._9-_z,
  ._aa4d ._9-_-,
  ._aa4d ._9-__,
  ._aa4d ._9_00,
  ._aa4d ._a3oy,
  ._aa4d ._9_01,
  ._aa4d ._9_02,
  ._aa4d ._9_03,
  ._aa4d ._9_04,
  ._aa4d ._9_05,
  ._aa4d ._9_08,
  ._aa4d ._9_09,
  ._aa4d ._9_07,
  ._aa4d ._9_06,
  ._aa4d ._9_0a,
  ._aa4d ._9_0b,
  ._aa4d ._9_0c,
  ._aa4d ._9_0d,
  ._aa4d ._9_0e,
  ._aa4d ._9_0f,
  ._aa4d ._9_0g,
  ._aa4d ._a93h,
  ._aa4d ._9_0h,
  ._aa4d ._9_0i,
  ._aa4d ._9_0j,
  ._aa4d ._9_0k,
  ._aa4d ._aepo,
  ._aa4d ._9_0l,
  ._aa4d ._9_0m,
  ._aa4d ._9_0n,
  ._aa4d ._9_0o,
  ._aa4d ._9_0p,
  ._aa4d ._a3oz,
  ._aa4d ._a93l,
  ._aa4d ._9_0r,
  ._aa4d ._9_0s,
  ._aa4d ._a7tk,
  ._aa4d ._9_0q,
  ._aa4d ._a3o-,
  ._aa4d ._9_0t,
  ._aa4d ._9_0v,
  ._aa4d ._9_0u,
  ._aa4d ._a9ej,
  ._aa4d ._9_0w,
  ._aa4d ._9_0x,
  ._aa4d ._9_0y,
  ._aa4d ._9_0z,
  ._aa4d ._9_0_,
  ._aa4d ._9_0-,
  ._aa4d ._9_10,
  ._aa4d ._9_11,
  ._aa4d ._9_12,
  ._aa4d ._9_13,
  ._aa4d ._9_14,
  ._aa4d ._9_15,
  ._aa4d ._a3o_,
  ._aa4d ._9_18,
  ._aa4d ._9_19,
  ._aa4d ._9_1a,
  ._aa4d ._9_1e,
  ._aa4d ._9_1b,
  ._aa4d ._9_1c,
  ._aa4d ._9_1d,
  ._aa4d ._9_16,
  ._aa4d ._9_17,
  ._aa4d ._a3p0,
  ._aa4d ._9_1g,
  ._aa4d ._9_1i,
  ._aa4d ._9_1h,
  ._aa4d ._9_1j,
  ._aa4d ._9_1k,
  ._aa4d ._9_1l,
  ._aa4d ._9_1m,
  ._aa4d ._a9pw {
    filter: brightness(0) saturate(100%) invert(85%) sepia(6%) saturate(1356%) hue-rotate(194deg) brightness(103%) contrast(91%);
  }
  ._aa4d [style*="background-image: url(\"https://static.cdninstagram.com/rsrc.php/v3/yU/r/H5Bq7ru-y9E.png\");"] {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22110%22%20height%3D%2239.285%22%20viewBox%3D%220%200%20110%2039.285%22%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22M8.481%206.431C6.358%207.32%204.025%209.83%203.288%2012.98c-.934%203.992%202.951%205.68%203.269%205.127.375-.65-.696-.87-.916-2.941-.285-2.675.959-5.665%202.525-6.976.292-.244.277.096.277.723%200%201.122-.062%2011.194-.062%2013.296%200%202.845-.118%203.742-.329%204.63-.213.9-.558%201.507-.297%201.741.292.262%201.533-.361%202.253-1.365.862-1.203%201.165-2.65%201.219-4.22.066-1.893.063-4.896.066-6.609.002-1.571.026-6.172-.028-8.938-.013-.679-1.894-1.39-2.783-1.018m75.38%2013.312c-.068%201.478-.396%202.635-.802%203.45-.786%201.579-2.419%202.068-3.111-.2-.377-1.236-.395-3.302-.123-5.028.276-1.758%201.048-3.086%202.325-2.966%201.261.118%201.85%201.742%201.712%204.744m-21.248%209.173c-.017%202.457-.404%204.611-1.233%205.237-1.176.887-2.757.221-2.43-1.571.289-1.586%201.659-3.207%203.666-5.187%200%200%20.004.451-.003%201.52m-.321-9.188c-.072%201.346-.421%202.699-.802%203.464-.786%201.579-2.43%202.071-3.111-.2-.465-1.552-.354-3.562-.123-4.828.299-1.642%201.024-3.167%202.325-3.167%201.265%200%201.89%201.388%201.712%204.73zm-12.307-.021c-.077%201.427-.355%202.619-.802%203.485-.808%201.568-2.407%202.065-3.111-.2-.508-1.634-.336-3.86-.123-5.063.314-1.785%201.099-3.05%202.325-2.93%201.26.123%201.872%201.742%201.712%204.709zm56.401%201.667c-.308%200-.449.318-.564.851-.404%201.858-.827%202.277-1.374%202.277-.611%200-1.159-.92-1.3-2.761-.111-1.448-.094-4.114.048-6.765.029-.544-.121-1.084-1.583-1.615-.629-.229-1.543-.564-1.998.533-1.286%203.103-1.789%205.568-1.907%206.568-.007.052-.069.063-.08-.058-.076-.802-.244-2.258-.265-5.32-.004-.597-.131-1.105-.79-1.521-.428-.27-1.727-.748-2.195-.179-.405.464-.875%201.715-1.362%203.198a270%20270%200%200%201-.672%202.02s.006-3.251.01-4.485c.002-.465-.317-.62-.414-.648-.433-.125-1.287-.336-1.649-.336-.447%200-.557.25-.557.614%200%20.047-.07%204.28-.07%207.24l.001.418c-.248%201.361-1.049%203.207-1.921%203.207s-1.285-.772-1.285-4.301c0-2.058.062-2.954.092-4.442.018-.858.052-1.516.05-1.665-.007-.459-.799-.69-1.167-.774a3.5%203.5%200%200%200-.944-.106c-.355.02-.607.253-.607.574l.002.499c-.459-.721-1.196-1.221-1.685-1.366-1.321-.393-2.699-.045-3.739%201.41-.826%201.156-1.324%202.465-1.52%204.346-.143%201.375-.097%202.77.158%203.949-.308%201.331-.879%201.876-1.505%201.876-.909%200-1.566-1.483-1.491-4.047.051-1.686.388-2.87.757-4.582.157-.73.03-1.112-.292-1.478-.294-.336-.921-.507-1.821-.296a32%2032%200%200%201-2.397.437s.051-.202.092-.558c.218-1.868-1.811-1.716-2.458-1.12-.386.356-.649.777-.749%201.531-.158%201.199.82%201.763.82%201.763-.321%201.469-1.107%203.386-1.918%204.772-.435.743-.767%201.294-1.197%201.879l-.003-.652c-.01-3.087.031-5.515.05-6.391.018-.858.052-1.498.051-1.648-.004-.336-.2-.462-.607-.621a4.4%204.4%200%200%200-1.227-.274c-.558-.044-.893.252-.884.602.002.066.002.471.002.471-.459-.721-1.196-1.221-1.685-1.366-1.321-.392-2.699-.044-3.739%201.41-.826%201.156-1.367%202.778-1.52%204.332-.143%201.448-.117%202.679.078%203.715-.21%201.038-.814%202.123-1.496%202.123-.873%200-1.37-.772-1.37-4.301%200-2.058.062-2.954.092-4.442.018-.858.052-1.516.05-1.665-.007-.459-.799-.69-1.167-.774a3.4%203.4%200%200%200-.975-.103c-.338.025-.574.328-.574.552v.519c-.459-.721-1.196-1.221-1.685-1.366-1.321-.392-2.692-.039-3.739%201.41-.683.945-1.235%201.992-1.52%204.311a14%2014%200%200%200-.113%201.884c-.273%201.665-1.475%203.585-2.458%203.585-.575%200-1.124-1.117-1.124-3.497%200-3.17.196-7.684.23-8.119l1.484-.024c.62-.007%201.181.008%202.008-.034.415-.021.813-1.508.386-1.692-.194-.084-1.563-.156-2.107-.168-.457-.01-1.727-.105-1.727-.105s.114-2.996.141-3.312c.022-.264-.319-.399-.515-.482-.476-.201-.902-.298-1.407-.402-.697-.144-1.013-.003-1.076.585-.094.893-.141%203.509-.141%203.509-.512%200-2.259-.1-2.771-.1-.475%200-.989%202.045-.331%202.07.757.03%202.075.055%202.948.081%200%200-.039%204.588-.039%206.005l.001.437c-.481%202.507-2.175%203.861-2.175%203.861.364-1.659-.38-2.904-1.718-3.958a123%20123%200%200%200-2.556-1.929s.631-.621%201.19-1.872c.396-.887.414-1.9-.56-2.124-1.608-.37-2.934.811-3.329%202.071-.307.977-.143%201.701.457%202.454q.066.083.141.167c-.363.7-.861%201.641-1.284%202.372-1.171%202.027-2.057%203.632-2.727%203.632-.535%200-.528-1.628-.528-3.153%200-1.315.097-3.29.175-5.336.025-.676-.312-1.063-.88-1.411-.344-.212-1.08-.629-1.506-.629-.638%200-2.477.087-4.215%205.114-.219.634-.649%201.789-.649%201.789l.037-6.046c0-.142-.076-.279-.249-.373-.293-.16-1.075-.484-1.771-.484q-.497%200-.497.461l-.061%209.459c0%20.718.019%201.557.09%201.924s.186.665.328.844a.95.95%200%200%200%20.576.369c.252.052%201.63.229%201.702-.298.086-.631.089-1.315.813-3.861%201.127-3.966%202.596-5.9%203.287-6.587.121-.12.259-.128.252.069-.03.869-.133%203.042-.204%204.887-.187%204.939.712%205.854%201.995%205.854.982%200%202.367-.976%203.851-3.446a868%20868%200%200%200%202.47-4.137c.45.417.955.865%201.46%201.343%201.173%201.112%201.558%202.17%201.302%203.174-.196.767-.931%201.557-2.241.789-.382-.224-.544-.397-.928-.65-.206-.135-.521-.176-.71-.034-.491.37-.77.839-.931%201.421-.156.567.411.866%201%201.127.506.226%201.594.43%202.288.453%202.704.09%204.87-1.306%206.378-4.906.27%203.11%201.419%204.87%203.414%204.87%201.334%200%202.672-1.725%203.257-3.421q.254%201.038.737%201.802c1.538%202.437%204.521%201.912%206.019-.157.463-.639.533-.869.533-.869.219%201.954%201.792%202.636%202.693%202.636%201.009%200%202.05-.476%202.781-2.121a6%206%200%200%200%20.281.51c1.538%202.437%204.521%201.912%206.019-.157a10%2010%200%200%200%20.186-.264l.044%201.284-1.379%201.265c-2.31%202.119-4.066%203.727-4.194%205.599-.166%202.387%201.77%203.275%203.235%203.39%201.555.123%202.888-.736%203.706-1.938.721-1.058%201.191-3.336%201.157-5.586-.013-.901-.036-2.046-.054-3.275a26.4%2026.4%200%200%200%202.569-3.529c.917-1.52%201.901-3.561%202.405-5.149%200%200%20.855.008%201.767-.053.292-.019.375.041.321.254-.065.259-1.152%204.451-.16%207.245.679%201.912%202.21%202.527%203.117%202.527%201.063%200%202.079-.802%202.623-1.993a4%204%200%200%200%20.209.38c1.538%202.437%204.51%201.909%206.019-.157.341-.466.533-.869.533-.869.323%202.022%201.896%202.647%202.796%202.647.938%200%201.828-.385%202.551-2.094.03.752.078%201.368.153%201.562.046.119.312.267.506.34.858.318%201.734.167%202.057.102.224-.045.399-.226.424-.69.063-1.22.024-3.27.394-4.794.621-2.558%201.2-3.549%201.475-4.04.154-.275.328-.32.333-.03.013.59.042%202.319.283%204.644.177%201.709.413%202.72.594%203.04.518.914%201.157.958%201.677.958.331%200%201.024-.091.961-.673-.03-.284.023-2.037.635-4.556.399-1.646%201.066-3.132%201.307-3.675.089-.2.13-.043.129-.012-.051%201.133-.164%204.839.297%206.865.626%202.746%202.435%203.053%203.067%203.053%201.346%200%202.448-1.024%202.818-3.719.089-.649-.043-1.149-.439-1.149%22/%3E%3C/svg%3E") !important;
    background-position: -3px -7px !important;
    background-size: unset !important;
  }
  ._aa4d [aria-label="Two factor authentication lock icon"] {
    content: url("data:image/svg+xml,%3Csvg%20width%3D%2276%22%20height%3D%2276%22%20viewBox%3D%220%200%2076%2076%22%20fill%3D%22%2389b4fa%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M38.49.004c-4.62-.066-9.374.71-14.079%202.456C7.41%208.766-2.782%2027.015.672%2044.969c2.997%2015.573%2014.442%2027.16%2029.91%2030.28%2023.375%204.714%2045.416-13.374%2045.416-37.271C75.998%2016.38%2058.508.288%2038.49.004m-.503%203.098c3.374%200%206.747.41%209.379%201.231C59.724%208.187%2067.739%2016.208%2071.63%2028.616c1.644%205.24%201.645%2013.474.002%2018.741-3.825%2012.263-11.866%2020.357-24.019%2024.174-6.902%202.169-15.31%201.747-22.419-1.125C5.896%2062.611-2.438%2040.654%206.89%2022.181c4.408-8.729%2011.704-14.725%2021.717-17.848%202.632-.82%206.006-1.231%209.38-1.231m15.47%201.416.082.04q-.02.04-.037.081a1%201%200%200%200-.045-.12m-.011.872q.015.042.034.08l-.093-.041a.3.3%200%200%200%20.059-.039M37.987%2021.69c-4.812%200-7.402%202.806-7.404%208.02%200%202.714-.056%202.839-1.26%202.839-1.61%200-3.961%201.21-4.358%202.243-.168.44-.306%203.79-.306%207.446%200%206.398.045%206.692%201.211%207.858l1.212%201.211h21.81l1.212-1.21c1.167-1.167%201.212-1.46%201.212-7.859%200-3.655-.139-7.006-.307-7.446-.397-1.033-2.748-2.243-4.359-2.243-1.203%200-1.259-.125-1.26-2.838%200-5.215-2.59-8.021-7.403-8.021m0%203.208c3.374%200%204.443%201.201%204.443%204.99v2.66h-8.885v-2.66c0-3.789%201.07-4.99%204.442-4.99m.084%2010.563c4.69.023%209.362.276%209.745.738.378.455.524%202.583.431%206.294l-.14%205.606-9.904.133c-5.447.073-10.057-.019-10.244-.205-.613-.614-.386-11.284.254-11.924.458-.458%205.167-.665%209.858-.642M38%2039.723a1.05%201.05%200%200%200-1.05%201.049%201.05%201.05%200%200%200%20.617.957v2.225h.865v-2.225a1.05%201.05%200%200%200%20.617-.957%201.05%201.05%200%200%200-1.05-1.05m15.607%2030.662a1%201%200%200%200-.084.14.2.2%200%200%200-.068-.072zm-.122.923q.031.056.078.098-.06.028-.123.053c.016-.05.029-.088.045-.151%22/%3E%3C/svg%3E");
  }
  ._aa4d img[src="/images/instagram/xig/web/illo-confirm-refresh-light.png"] {
    content: url("data:image/svg+xml,%3Csvg%20width%3D%2296%22%20height%3D%2295.986%22%20viewBox%3D%220%200%2025.4%2025.397%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22%2389b4fa%22%3E%3Cpath%20d%3D%22M12.591.001c-1.934.008-2.265.045-3.353.374-.664.201-1.703.612-2.308.914s-1.582.931-2.172%201.396c-.589.466-1.436%201.287-1.883%201.825-.468.564-1.127%201.604-1.554%202.455C.913%207.777.45%208.923.292%209.514c-.234.872-.288%201.461-.292%203.152-.004%201.575.053%202.291.231%202.951.13.479.353%201.192.497%201.582.143.391.389.964.546%201.274s.581.994.943%201.519a14.4%2014.4%200%200%200%201.558%201.82c.496.476%201.263%201.109%201.706%201.408s1.112.698%201.487.887%201.069.477%201.543.638c.473.161%201.282.371%201.799.466s1.513.178%202.214.184%201.667-.05%202.146-.125%201.355-.293%201.945-.485%201.375-.501%201.744-.687a17%2017%200%200%200%201.475-.88c.443-.298%201.21-.932%201.706-1.408s1.197-1.295%201.559-1.82.81-1.257.995-1.626.494-1.154.685-1.744.41-1.465.485-1.945.136-1.385.136-2.012-.061-1.533-.136-2.012-.293-1.355-.485-1.945-.5-1.375-.685-1.744-.633-1.1-.994-1.626a14.4%2014.4%200%200%200-1.559-1.82c-.496-.476-1.286-1.125-1.757-1.443-.471-.317-1.289-.778-1.82-1.023S16.49.466%2015.868.297c-.969-.261-1.437-.304-3.277-.296m-.515.555.001.003h-.004q.002%200%20.003-.003m.65.254c1.324.011%202.002.084%202.817.303.59.158%201.58.531%202.2.827s1.435.763%201.811%201.036.972.764%201.324%201.09.938.995%201.302%201.486.906%201.402%201.203%202.025c.297.622.671%201.614.831%202.205.23.851.29%201.448.29%202.884%200%201.426-.061%202.039-.287%202.884-.158.59-.586%201.677-.95%202.414s-1%201.748-1.412%202.245-1.155%201.241-1.652%201.652c-.497.412-1.507%201.047-2.245%201.412s-1.824.787-2.414.937c-.599.153-1.696.299-2.482.331-.874.035-1.772-.013-2.369-.127a17%2017%200%200%201-1.677-.418%2016%2016%200%200%201-1.656-.7c-.517-.256-1.271-.709-1.677-1.006s-.999-.789-1.317-1.092c-.319-.303-.875-.948-1.235-1.432s-.899-1.39-1.197-2.012c-.297-.622-.667-1.615-.821-2.205s-.312-1.707-.35-2.482c-.055-1.1-.011-1.693.2-2.71.148-.716.474-1.772.723-2.348s.692-1.408.984-1.849.919-1.214%201.392-1.716S5.417%203.202%206.022%202.8s1.515-.903%202.024-1.112a18%2018%200%200%201%201.931-.637c.76-.194%201.432-.253%202.75-.242m3.229.115v.002l.006.004-.012-.003zm3.312%206.912c-.129%200-2.197%201.962-4.596%204.36l-4.363%204.361-2.077-2.08c-1.456-1.459-2.167-2.08-2.38-2.08-.225%200-.304.078-.304.3%200%20.21.679.98%202.245%202.549%201.413%201.415%202.345%202.248%202.514%202.248.174%200%201.838-1.568%204.73-4.459%203.7-3.699%204.461-4.523%204.461-4.829%200-.262-.068-.369-.234-.369m5.624%202.252.004.015q-.003-.004-.008-.007zm-.303.013.006.003-.004.005zM7.614%2023.749l.019.009-.004.016q-.006-.013-.014-.024m8.544.584-.001.003-.004-.002zm.004.306.003.001-.005.001z%22/%3E%3C/svg%3E");
  }
  ._aa4d [style*='background-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png")'] {
    /* No photo icon */
    /* Private page icon */
  }
  ._aa4d [style*='background-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png")'][style*="background-position: 0px -97px"] {
    filter: none;
    background: #cba6f7 !important;
    background: radial-gradient(circle at 30% 107%, #f9e2af 0%, #f9e2af 5%, #fab387 45%, #cba6f7 60%, #89b4fa 90%) !important;
    mask-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png");
    mask-position: 0 -97px;
  }
  ._aa4d [style*='background-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png")'][style*="background-position: -49px -97px"] {
    filter: none;
    background: #cba6f7 !important;
    background: radial-gradient(circle at 30% 107%, #f9e2af 0%, #f9e2af 5%, #fab387 45%, #cba6f7 60%, #89b4fa 90%) !important;
    mask-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png");
    mask-position: -49px -97px;
  }
  ._aa4d [style*='background-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png")'][style*="background-position: -49px 0px"] {
    filter: none;
    background: #cba6f7 !important;
    background: radial-gradient(circle at 30% 107%, #f9e2af 0%, #f9e2af 5%, #fab387 45%, #cba6f7 60%, #89b4fa 90%) !important;
    mask-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png");
    mask-position: -49px 0;
  }
  ._aa4d ._aaqh {
    background-color: #313244;
  }
  ._aa4d .xzloghq,
  ._aa4d ._acas:not(._acao),
  ._aa4d .xzloghq svg,
  ._aa4d ._acas:not(._acao) svg {
    color: #11111b;
    fill: #181825;
  }
  ._aa4d ._acas:not(._acao):hover {
    background-color: #313244 !important;
    color: #89b4fa !important;
  }
  ._aa4d .x1gjpkn9,
  ._aa4d ._acat,
  ._aa4d ._acap,
  a._aa4d .x1gjpkn9,
  a._aa4d ._acat,
  a._aa4d ._acap,
  ._aa4d .x1gjpkn9:visited,
  ._aa4d ._acat:visited,
  ._aa4d ._acap:visited,
  a._aa4d .x1gjpkn9:visited,
  a._aa4d ._acat:visited,
  a._aa4d ._acap:visited {
    color: #cdd6f4;
  }
  ._aa4d div:has(> .x1mu97ne) {
    background-color: #11111b;
    border-color: #6c7086;
    box-shadow: 0 10px 35px 2px rgba(17, 17, 27, 0.993);
  }
  ._aa4d .x7r02ix[role="dialog"] {
    box-shadow: 0 5px 10px 0 rgba(17, 17, 27, 0.995);
  }
  ._aa4d ._ab81 {
    background-color: #181825;
  }
  ._aa4d ._ab85,
  ._aa4d ._ab6i,
  ._aa4d ._ab85 .xvbhtw8,
  ._aa4d ._aav4 {
    background-color: #11111b;
  }
  ._aa4d ._abmp {
    color: #cdd6f4;
  }
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Collection"] {
    background-color: #1e1e2e !important;
  }
  ._aa4d div[data-bloks-name="bk.components.Flexbox"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"] {
    /* Radios have left padding */
    padding-left: 0 !important;
    /* The heading */
    /* Radios */
    /* That "border" */
  }
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="background: rgb(0\, 0\, 0)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="background: rgb(0\, 0\, 0)"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="background: rgb(255\, 255\, 255)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="background: rgb(255\, 255\, 255)"] {
    background-color: #1e1e2e !important;
  }
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"] {
    /* Selected radio */
    /* Not selected radio */
  }
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(0\, 149\, 246)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(0\, 149\, 246)"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(0\, 149\, 246)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(0\, 149\, 246)"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(0\, 149\, 246)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(0\, 149\, 246)"] {
    background-color: #89b4fa !important;
  }
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(219\, 219\, 219)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(219\, 219\, 219)"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(219\, 219\, 219)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(219\, 219\, 219)"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(219\, 219\, 219)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(219\, 219\, 219)"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(38\, 38\, 38)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(38\, 38\, 38)"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(38\, 38\, 38)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(38\, 38\, 38)"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(38\, 38\, 38)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(38\, 38\, 38)"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(54\, 54\, 54)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(54\, 54\, 54)"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(54\, 54\, 54)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(54\, 54\, 54)"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(54\, 54\, 54)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(54\, 54\, 54)"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(255\, 255\, 255)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(255\, 255\, 255)"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(255\, 255\, 255)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(255\, 255\, 255)"],
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(255\, 255\, 255)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(255\, 255\, 255)"] {
    background-color: #313244 !important;
  }
  ._aa4d div[data-bloks-name="bk.components.Flexbox"][style*="background: rgb(38\, 38\, 38)"],
  ._aa4d .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="background: rgb(38\, 38\, 38)"] {
    display: none;
  }
  ._aa4d span[data-bloks-name="bk.components.TextSpan"][style*="color: rgb(250\, 250\, 250)"],
  ._aa4d span[data-bloks-name="bk.components.Text"][style*="color: rgb(250\, 250\, 250)"],
  ._aa4d span[data-bloks-name="bk.components.TextSpan"][style*="color: rgb(224\, 241\, 255)"],
  ._aa4d span[data-bloks-name="bk.components.Text"][style*="color: rgb(224\, 241\, 255)"],
  ._aa4d span[data-bloks-name="bk.components.TextSpan"][style*="color: rgb(0\, 55\, 107)"],
  ._aa4d span[data-bloks-name="bk.components.Text"][style*="color: rgb(0\, 55\, 107)"],
  ._aa4d span[data-bloks-name="bk.components.TextSpan"][style*="color: rgb(38\, 38\, 38)"],
  ._aa4d span[data-bloks-name="bk.components.Text"][style*="color: rgb(38\, 38\, 38)"] {
    color: #cdd6f4 !important;
  }
  ._aa4d span[data-bloks-name="bk.components.TextSpan"][style*="color: rgb(142\, 142\, 142)"],
  ._aa4d span[data-bloks-name="bk.components.Text"][style*="color: rgb(142\, 142\, 142)"] {
    color: #a6adc8 !important;
  }
  ._aa4d .leaflet-popup-content-wrapper,
  ._aa4d .leaflet-popup-tip {
    background-color: #181825;
    box-shadow: 0 5px 15px rgba(17, 17, 27, 0.996);
  }
  ._aa4d .leaflet-popup-content-wrapper *,
  ._aa4d .leaflet-popup-tip * {
    color: #cdd6f4 !important;
  }
  ._aa4d ::-webkit-scrollbar {
    background-color: #11111b;
  }
  ._aa4d ::-webkit-scrollbar-thumb {
    background-color: #89b4fa;
    border-radius: 10px;
  }
  ._aa4c {
    color-scheme: dark;
    /* Sidebar */
    /* Story background */
    /* Story progress bar */
    /* Story seen / not seen ring */
    /* Posts */
    /* Icons */
    /* Share box */
    /* Toggle sliders */
    /* Log In With Facebook text */
    /* Excluded:  - _9ys7, _9_1f, _9ys8 (verified icon) */
    /* Custom icons */
    /* Instagram text logo */
    /* 2fa lock icon */
    /* "All caught up" icon */
    /* Post swipe icons */
    /* Inside primary buttons */
    /* Secondary buttons */
    /* Profile banner */
    /* Dialog overlay */
    /* Settings */
    /* Settings saved toast */
    /* Bloks */
    /* Map pop-ups */
    /* Scrollbar */
  }
  ._aa4c ::selection {
    background-color: rgba(30, 102, 245, 0.3);
  }
  ._aa4c input::placeholder,
  ._aa4c textarea::placeholder {
    color: #6c6f85 !important;
  }
  ._aa4c,
  ._aa4c .x1qjc9v5,
  ._aa4c .x9f619,
  ._aa4c .x78zum5,
  ._aa4c .xdt5ytf,
  ._aa4c .x1iyjqo2,
  ._aa4c .xl56j7k {
    --web-always-black: 220, 224, 232;
    --ig-primary-icon: 76, 79, 105;
    --web-always-white: 76, 79, 105;
    --always-white: 76, 79, 105;
    --overlay-alpha-80: rgba(220, 224, 232, 0.5);
    --always-dark-overlay: rgba(204, 208, 218, 0.5);
    --grey-9: 220, 224, 232;
    --ig-primary-background: 239, 241, 245;
    --ig-secondary-background: 204, 208, 218;
    --ig-banner-background: 220, 224, 232;
    --ig-highlight-background: 204, 208, 218;
    --ig-elevated-background: 220, 224, 232;
    --ig-elevated-highlight-background: 204, 208, 218;
    --ig-hover-overlay: 76, 79, 105, 0.1;
    --hover-overlay: rgba(204, 208, 218, 0.2);
    --ig-text-on-color: 220, 224, 232;
    --ig-badge: 30, 102, 245;
    --ig-primary-button: 30, 102, 245;
    --ig-primary-button-hover: rgba(30, 102, 245, 0.8);
    --ig-secondary-button-background: 204, 208, 218;
    --ig-secondary-button-hover: 188, 192, 204;
    --ig-secondary-button: 76, 79, 105;
    --ig-primary-text: 76, 79, 105;
    --ig-secondary-text: 108, 111, 133;
    --ig-tertiary-text: 108, 111, 133;
    --wbloks-primary-text: #4c4f69;
    --ig-text-on-media: 76, 79, 105;
    --ig-separator: 204, 208, 218;
    --chat-admin-text-color: 108, 111, 133;
    --ig-elevated-separator: 204, 208, 218;
    --post-separator: 156, 160, 176;
    --ig-stroke: 156, 160, 176;
    --grey-2: 156, 160, 176;
    --ig-link: 30, 102, 245;
    --ig-error-or-destructive: 230, 69, 83;
    --ig-success: 64, 160, 43;
    --blue-2: 30, 102, 245;
    --ig-close-friends-refreshed: 64, 160, 43;
    --ig-text-input-border-hover-prism: 188, 192, 204;
    --ig-toggle-outline-prism: 76, 79, 105;
    --ig-toggle-background-on-prism: 76, 79, 105;
    --ig-stroke-prism: 220, 224, 232;
    --barcelona-logo: 76, 79, 105;
    scrollbar-color: #1e66f5 #dce0e8;
  }
  ._aa4c #splash-screen {
    background-color: #eff1f5 !important;
  }
  ._aa4c .x1xgvd2v {
    background-color: #dce0e8 !important;
  }
  ._aa4c .x1xgvd2v[style="transform: translateX(0px);"] {
    background-color: #e6e9ef !important;
  }
  ._aa4c .x1zvrr1 {
    background-color: #e6e9ef;
  }
  ._aa4c svg[aria-label="Loading..."] {
    stroke: #4c4f69;
  }
  ._aa4c .x5qyhuo {
    background-color: #eff1f5;
  }
  ._aa4c ._ac3p {
    background-color: #1e66f5 !important;
  }
  ._aa4c button:has(canvas + span > img[alt$="'s profile picture"]) canvas {
    display: none;
  }
  ._aa4c button:has(canvas + span > img[alt$="'s profile picture"]) span {
    outline-style: solid;
    outline-offset: 0.15rem;
  }
  ._aa4c button:has(canvas + span > img[alt$="'s profile picture"])[aria-label^="Story by"][aria-label$="not seen"] span {
    outline-color: #1e66f5;
    outline-width: 0.2rem;
  }
  ._aa4c button:has(canvas + span > img[alt$="'s profile picture"])[aria-label^="Story by"]:not([aria-label$="not seen"]) span {
    outline-color: #acb0be;
    outline-width: 0.075rem;
  }
  ._aa4c ._aggc {
    background-color: #e6e9ef;
    border-color: #9ca0b0 !important;
    border-radius: var(--modal-border-radius);
    box-shadow: 0 3px 5px -1px rgba(220, 224, 232, 0.8);
    box-sizing: border-box;
  }
  ._aa4c ._aatc ._aasi,
  ._aa4c ._ae1i,
  ._aa4c ._aggc textarea.xvbhtw8 {
    background-color: #e6e9ef;
  }
  ._aa4c svg[aria-label="Unlike"] {
    fill: #1e66f5;
  }
  ._aa4c svg[aria-label="Close"] {
    color: #4c4f69;
  }
  ._aa4c svg[aria-label="Verified"] {
    fill: #1e66f5;
  }
  ._aa4c .xzloghq {
    background-color: #ccd0da;
    color: #4c4f69 !important;
  }
  ._aa4c .xzloghq:hover {
    color: #e6e9ef !important;
    background-color: #1e66f5 !important;
  }
  ._aa4c .xk5f4mz {
    background-color: #e6e9ef;
  }
  ._aa4c .xk5f4mz:hover {
    background-color: #1e66f5;
  }
  ._aa4c .x3nfvp2 {
    color: #4c4f69 !important;
  }
  ._aa4c .x3nfvp2:hover {
    color: #dce0e8;
  }
  ._aa4c .x1r7x56h {
    background-color: #1e66f5;
  }
  ._aa4c .x100vrsf {
    background-color: #ccd0da;
  }
  ._aa4c .xw4jnvo {
    background-color: #8c8fa1;
  }
  ._aa4c .x1psfjxj {
    background-color: #e6e9ef;
  }
  ._aa4c span[data-bloks-name="bk.components.TextSpan"] {
    color: #1e66f5 !important;
  }
  ._aa4c .xs7f9wi {
    background-color: #e6e9ef !important;
  }
  ._aa4c .x1d72o {
    background-color: #ccd0da;
  }
  ._aa4c ._ab37 {
    color: #1e66f5;
  }
  ._aa4c [style*='background-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png")'],
  ._aa4c ._9zkj,
  ._aa4c ._a3ds,
  ._aa4c ._a3dt,
  ._aa4c ._a3du,
  ._aa4c ._a3dv,
  ._aa4c ._a3dw,
  ._aa4c ._9-b3,
  ._aa4c ._9znl,
  ._aa4c ._9z-6,
  ._aa4c ._a3dx,
  ._aa4c ._a3dy,
  ._aa4c ._a3dz,
  ._aa4c ._a3d-,
  ._aa4c ._a3d_,
  ._aa4c ._a3e0,
  ._aa4c ._9zm4,
  ._aa4c ._a3e1,
  ._aa4c ._a3e2,
  ._aa4c ._a3e3,
  ._aa4c ._a3e4,
  ._aa4c ._a3e5,
  ._aa4c ._a3e6,
  ._aa4c ._a3e7,
  ._aa4c ._a3e8,
  ._aa4c ._a3e9,
  ._aa4c ._a3ea,
  ._aa4c ._9_57,
  ._aa4c ._9_n5,
  ._aa4c ._9-y3,
  ._aa4c ._a3eb,
  ._aa4c ._a3ec,
  ._aa4c ._a3ed,
  ._aa4c ._a3ee,
  ._aa4c ._9zlu,
  ._aa4c ._9-yp,
  ._aa4c ._a3ef,
  ._aa4c ._a3eg,
  ._aa4c ._9_wm,
  ._aa4c ._a3eh,
  ._aa4c ._a3ei,
  ._aa4c ._9-j_,
  ._aa4c ._a3ej,
  ._aa4c ._a3ek,
  ._aa4c ._9_ij,
  ._aa4c ._9_d_,
  ._aa4c ._9_e1,
  ._aa4c ._9-mm,
  ._aa4c ._9_cx,
  ._aa4c ._9zm0,
  ._aa4c ._9zfi,
  ._aa4c ._9-ub,
  ._aa4c ._a3el,
  ._aa4c ._9-7-,
  ._aa4c ._9-1a,
  ._aa4c ._a3em,
  ._aa4c ._9zrp,
  ._aa4c ._a3en,
  ._aa4c ._9zz9,
  ._aa4c ._a3eo,
  ._aa4c ._9zmr,
  ._aa4c ._9-8d,
  ._aa4c ._9zhi,
  ._aa4c ._a3ep,
  ._aa4c ._9zs0,
  ._aa4c ._9-j-,
  ._aa4c ._a3eq,
  ._aa4c ._9zli,
  ._aa4c ._9_4y,
  ._aa4c ._9zm2,
  ._aa4c ._9zfj,
  ._aa4c ._9zlg,
  ._aa4c ._a3er,
  ._aa4c ._9-lv,
  ._aa4c ._9_ug,
  ._aa4c ._9_sh,
  ._aa4c ._9_sj,
  ._aa4c ._9-k0,
  ._aa4c ._9z-c,
  ._aa4c ._9_35,
  ._aa4c ._9_hh,
  ._aa4c ._a3es,
  ._aa4c ._a3et,
  ._aa4c ._a3eu,
  ._aa4c ._9-v-,
  ._aa4c ._9_4d,
  ._aa4c ._9zlh,
  ._aa4c ._a3ev,
  ._aa4c ._a3ew,
  ._aa4c ._a3ex,
  ._aa4c ._a3ey,
  ._aa4c ._9_7m,
  ._aa4c ._9_fv,
  ._aa4c ._a3ez,
  ._aa4c ._9-zf,
  ._aa4c ._9-zg,
  ._aa4c ._9-ze,
  ._aa4c ._a9fa,
  ._aa4c ._9-zh,
  ._aa4c ._9-zi,
  ._aa4c ._9-zj,
  ._aa4c ._9-zk,
  ._aa4c ._9-zl,
  ._aa4c ._9-zm,
  ._aa4c ._9-zn,
  ._aa4c ._9-zo,
  ._aa4c ._9-zp,
  ._aa4c ._9-zq,
  ._aa4c ._9-zr,
  ._aa4c ._9-zs,
  ._aa4c ._9-zt,
  ._aa4c ._a3op,
  ._aa4c ._a3oq,
  ._aa4c ._9-zu,
  ._aa4c ._9-zv,
  ._aa4c ._9-zw,
  ._aa4c ._9-zx,
  ._aa4c ._9-zy,
  ._aa4c ._9-zz,
  ._aa4c ._9-z-,
  ._aa4c ._a3or,
  ._aa4c ._a3ot,
  ._aa4c ._a3os,
  ._aa4c ._9zs1,
  ._aa4c ._9zs2,
  ._aa4c ._9-z_,
  ._aa4c ._9--0,
  ._aa4c ._9--1,
  ._aa4c ._9--2,
  ._aa4c ._9--3,
  ._aa4c ._9--4,
  ._aa4c ._9--5,
  ._aa4c ._9--6,
  ._aa4c ._9--7,
  ._aa4c ._9--f,
  ._aa4c ._9--8,
  ._aa4c ._9--9,
  ._aa4c ._9--a,
  ._aa4c ._9--b,
  ._aa4c ._9--c,
  ._aa4c ._9--d,
  ._aa4c ._9--e,
  ._aa4c ._a3ou,
  ._aa4c ._9--g,
  ._aa4c ._9--h,
  ._aa4c ._9--i,
  ._aa4c ._9--j,
  ._aa4c ._9--l,
  ._aa4c ._9--k,
  ._aa4c ._9--m,
  ._aa4c ._9--n,
  ._aa4c ._9--o,
  ._aa4c ._9--p,
  ._aa4c ._9--q,
  ._aa4c ._a3ov,
  ._aa4c ._9--s,
  ._aa4c ._9--r,
  ._aa4c ._9--t,
  ._aa4c ._9--u,
  ._aa4c ._9--v,
  ._aa4c ._9--x,
  ._aa4c ._9--y,
  ._aa4c ._9--w,
  ._aa4c ._9--z,
  ._aa4c ._9--_,
  ._aa4c ._9-_0,
  ._aa4c ._9-_1,
  ._aa4c ._9-_2,
  ._aa4c ._9-_3,
  ._aa4c ._9---,
  ._aa4c ._9-_4,
  ._aa4c ._9-_5,
  ._aa4c ._9-_6,
  ._aa4c ._9-_7,
  ._aa4c ._a3wy,
  ._aa4c ._9-_8,
  ._aa4c ._9-_9,
  ._aa4c ._a3ow,
  ._aa4c ._9-_a,
  ._aa4c ._9-_b,
  ._aa4c ._9-_c,
  ._aa4c ._9-_d,
  ._aa4c ._9-_e,
  ._aa4c ._9-_f,
  ._aa4c ._9-_g,
  ._aa4c ._9-_h,
  ._aa4c ._9-_i,
  ._aa4c ._9-_j,
  ._aa4c ._9-_k,
  ._aa4c ._9-_l,
  ._aa4c ._9-_m,
  ._aa4c ._9-_n,
  ._aa4c ._9-_o,
  ._aa4c ._a3ox,
  ._aa4c ._9-_p,
  ._aa4c ._9-_q,
  ._aa4c ._a9fb,
  ._aa4c ._9-_t,
  ._aa4c ._9-_r,
  ._aa4c ._9-_s,
  ._aa4c ._a93g,
  ._aa4c ._9-_u,
  ._aa4c ._9-_v,
  ._aa4c ._a9fc,
  ._aa4c ._9-_w,
  ._aa4c ._9-_x,
  ._aa4c ._9-_y,
  ._aa4c ._9-_z,
  ._aa4c ._9-_-,
  ._aa4c ._9-__,
  ._aa4c ._9_00,
  ._aa4c ._a3oy,
  ._aa4c ._9_01,
  ._aa4c ._9_02,
  ._aa4c ._9_03,
  ._aa4c ._9_04,
  ._aa4c ._9_05,
  ._aa4c ._9_08,
  ._aa4c ._9_09,
  ._aa4c ._9_07,
  ._aa4c ._9_06,
  ._aa4c ._9_0a,
  ._aa4c ._9_0b,
  ._aa4c ._9_0c,
  ._aa4c ._9_0d,
  ._aa4c ._9_0e,
  ._aa4c ._9_0f,
  ._aa4c ._9_0g,
  ._aa4c ._a93h,
  ._aa4c ._9_0h,
  ._aa4c ._9_0i,
  ._aa4c ._9_0j,
  ._aa4c ._9_0k,
  ._aa4c ._aepo,
  ._aa4c ._9_0l,
  ._aa4c ._9_0m,
  ._aa4c ._9_0n,
  ._aa4c ._9_0o,
  ._aa4c ._9_0p,
  ._aa4c ._a3oz,
  ._aa4c ._a93l,
  ._aa4c ._9_0r,
  ._aa4c ._9_0s,
  ._aa4c ._a7tk,
  ._aa4c ._9_0q,
  ._aa4c ._a3o-,
  ._aa4c ._9_0t,
  ._aa4c ._9_0v,
  ._aa4c ._9_0u,
  ._aa4c ._a9ej,
  ._aa4c ._9_0w,
  ._aa4c ._9_0x,
  ._aa4c ._9_0y,
  ._aa4c ._9_0z,
  ._aa4c ._9_0_,
  ._aa4c ._9_0-,
  ._aa4c ._9_10,
  ._aa4c ._9_11,
  ._aa4c ._9_12,
  ._aa4c ._9_13,
  ._aa4c ._9_14,
  ._aa4c ._9_15,
  ._aa4c ._a3o_,
  ._aa4c ._9_18,
  ._aa4c ._9_19,
  ._aa4c ._9_1a,
  ._aa4c ._9_1e,
  ._aa4c ._9_1b,
  ._aa4c ._9_1c,
  ._aa4c ._9_1d,
  ._aa4c ._9_16,
  ._aa4c ._9_17,
  ._aa4c ._a3p0,
  ._aa4c ._9_1g,
  ._aa4c ._9_1i,
  ._aa4c ._9_1h,
  ._aa4c ._9_1j,
  ._aa4c ._9_1k,
  ._aa4c ._9_1l,
  ._aa4c ._9_1m,
  ._aa4c ._a9pw {
    filter: brightness(0) saturate(100%) invert(28%) sepia(17%) saturate(835%) hue-rotate(196deg) brightness(97%) contrast(85%);
  }
  ._aa4c [style*="background-image: url(\"https://static.cdninstagram.com/rsrc.php/v3/yU/r/H5Bq7ru-y9E.png\");"] {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22110%22%20height%3D%2239.285%22%20viewBox%3D%220%200%20110%2039.285%22%3E%3Cpath%20fill%3D%22%234c4f69%22%20d%3D%22M8.481%206.431C6.358%207.32%204.025%209.83%203.288%2012.98c-.934%203.992%202.951%205.68%203.269%205.127.375-.65-.696-.87-.916-2.941-.285-2.675.959-5.665%202.525-6.976.292-.244.277.096.277.723%200%201.122-.062%2011.194-.062%2013.296%200%202.845-.118%203.742-.329%204.63-.213.9-.558%201.507-.297%201.741.292.262%201.533-.361%202.253-1.365.862-1.203%201.165-2.65%201.219-4.22.066-1.893.063-4.896.066-6.609.002-1.571.026-6.172-.028-8.938-.013-.679-1.894-1.39-2.783-1.018m75.38%2013.312c-.068%201.478-.396%202.635-.802%203.45-.786%201.579-2.419%202.068-3.111-.2-.377-1.236-.395-3.302-.123-5.028.276-1.758%201.048-3.086%202.325-2.966%201.261.118%201.85%201.742%201.712%204.744m-21.248%209.173c-.017%202.457-.404%204.611-1.233%205.237-1.176.887-2.757.221-2.43-1.571.289-1.586%201.659-3.207%203.666-5.187%200%200%20.004.451-.003%201.52m-.321-9.188c-.072%201.346-.421%202.699-.802%203.464-.786%201.579-2.43%202.071-3.111-.2-.465-1.552-.354-3.562-.123-4.828.299-1.642%201.024-3.167%202.325-3.167%201.265%200%201.89%201.388%201.712%204.73zm-12.307-.021c-.077%201.427-.355%202.619-.802%203.485-.808%201.568-2.407%202.065-3.111-.2-.508-1.634-.336-3.86-.123-5.063.314-1.785%201.099-3.05%202.325-2.93%201.26.123%201.872%201.742%201.712%204.709zm56.401%201.667c-.308%200-.449.318-.564.851-.404%201.858-.827%202.277-1.374%202.277-.611%200-1.159-.92-1.3-2.761-.111-1.448-.094-4.114.048-6.765.029-.544-.121-1.084-1.583-1.615-.629-.229-1.543-.564-1.998.533-1.286%203.103-1.789%205.568-1.907%206.568-.007.052-.069.063-.08-.058-.076-.802-.244-2.258-.265-5.32-.004-.597-.131-1.105-.79-1.521-.428-.27-1.727-.748-2.195-.179-.405.464-.875%201.715-1.362%203.198a270%20270%200%200%201-.672%202.02s.006-3.251.01-4.485c.002-.465-.317-.62-.414-.648-.433-.125-1.287-.336-1.649-.336-.447%200-.557.25-.557.614%200%20.047-.07%204.28-.07%207.24l.001.418c-.248%201.361-1.049%203.207-1.921%203.207s-1.285-.772-1.285-4.301c0-2.058.062-2.954.092-4.442.018-.858.052-1.516.05-1.665-.007-.459-.799-.69-1.167-.774a3.5%203.5%200%200%200-.944-.106c-.355.02-.607.253-.607.574l.002.499c-.459-.721-1.196-1.221-1.685-1.366-1.321-.393-2.699-.045-3.739%201.41-.826%201.156-1.324%202.465-1.52%204.346-.143%201.375-.097%202.77.158%203.949-.308%201.331-.879%201.876-1.505%201.876-.909%200-1.566-1.483-1.491-4.047.051-1.686.388-2.87.757-4.582.157-.73.03-1.112-.292-1.478-.294-.336-.921-.507-1.821-.296a32%2032%200%200%201-2.397.437s.051-.202.092-.558c.218-1.868-1.811-1.716-2.458-1.12-.386.356-.649.777-.749%201.531-.158%201.199.82%201.763.82%201.763-.321%201.469-1.107%203.386-1.918%204.772-.435.743-.767%201.294-1.197%201.879l-.003-.652c-.01-3.087.031-5.515.05-6.391.018-.858.052-1.498.051-1.648-.004-.336-.2-.462-.607-.621a4.4%204.4%200%200%200-1.227-.274c-.558-.044-.893.252-.884.602.002.066.002.471.002.471-.459-.721-1.196-1.221-1.685-1.366-1.321-.392-2.699-.044-3.739%201.41-.826%201.156-1.367%202.778-1.52%204.332-.143%201.448-.117%202.679.078%203.715-.21%201.038-.814%202.123-1.496%202.123-.873%200-1.37-.772-1.37-4.301%200-2.058.062-2.954.092-4.442.018-.858.052-1.516.05-1.665-.007-.459-.799-.69-1.167-.774a3.4%203.4%200%200%200-.975-.103c-.338.025-.574.328-.574.552v.519c-.459-.721-1.196-1.221-1.685-1.366-1.321-.392-2.692-.039-3.739%201.41-.683.945-1.235%201.992-1.52%204.311a14%2014%200%200%200-.113%201.884c-.273%201.665-1.475%203.585-2.458%203.585-.575%200-1.124-1.117-1.124-3.497%200-3.17.196-7.684.23-8.119l1.484-.024c.62-.007%201.181.008%202.008-.034.415-.021.813-1.508.386-1.692-.194-.084-1.563-.156-2.107-.168-.457-.01-1.727-.105-1.727-.105s.114-2.996.141-3.312c.022-.264-.319-.399-.515-.482-.476-.201-.902-.298-1.407-.402-.697-.144-1.013-.003-1.076.585-.094.893-.141%203.509-.141%203.509-.512%200-2.259-.1-2.771-.1-.475%200-.989%202.045-.331%202.07.757.03%202.075.055%202.948.081%200%200-.039%204.588-.039%206.005l.001.437c-.481%202.507-2.175%203.861-2.175%203.861.364-1.659-.38-2.904-1.718-3.958a123%20123%200%200%200-2.556-1.929s.631-.621%201.19-1.872c.396-.887.414-1.9-.56-2.124-1.608-.37-2.934.811-3.329%202.071-.307.977-.143%201.701.457%202.454q.066.083.141.167c-.363.7-.861%201.641-1.284%202.372-1.171%202.027-2.057%203.632-2.727%203.632-.535%200-.528-1.628-.528-3.153%200-1.315.097-3.29.175-5.336.025-.676-.312-1.063-.88-1.411-.344-.212-1.08-.629-1.506-.629-.638%200-2.477.087-4.215%205.114-.219.634-.649%201.789-.649%201.789l.037-6.046c0-.142-.076-.279-.249-.373-.293-.16-1.075-.484-1.771-.484q-.497%200-.497.461l-.061%209.459c0%20.718.019%201.557.09%201.924s.186.665.328.844a.95.95%200%200%200%20.576.369c.252.052%201.63.229%201.702-.298.086-.631.089-1.315.813-3.861%201.127-3.966%202.596-5.9%203.287-6.587.121-.12.259-.128.252.069-.03.869-.133%203.042-.204%204.887-.187%204.939.712%205.854%201.995%205.854.982%200%202.367-.976%203.851-3.446a868%20868%200%200%200%202.47-4.137c.45.417.955.865%201.46%201.343%201.173%201.112%201.558%202.17%201.302%203.174-.196.767-.931%201.557-2.241.789-.382-.224-.544-.397-.928-.65-.206-.135-.521-.176-.71-.034-.491.37-.77.839-.931%201.421-.156.567.411.866%201%201.127.506.226%201.594.43%202.288.453%202.704.09%204.87-1.306%206.378-4.906.27%203.11%201.419%204.87%203.414%204.87%201.334%200%202.672-1.725%203.257-3.421q.254%201.038.737%201.802c1.538%202.437%204.521%201.912%206.019-.157.463-.639.533-.869.533-.869.219%201.954%201.792%202.636%202.693%202.636%201.009%200%202.05-.476%202.781-2.121a6%206%200%200%200%20.281.51c1.538%202.437%204.521%201.912%206.019-.157a10%2010%200%200%200%20.186-.264l.044%201.284-1.379%201.265c-2.31%202.119-4.066%203.727-4.194%205.599-.166%202.387%201.77%203.275%203.235%203.39%201.555.123%202.888-.736%203.706-1.938.721-1.058%201.191-3.336%201.157-5.586-.013-.901-.036-2.046-.054-3.275a26.4%2026.4%200%200%200%202.569-3.529c.917-1.52%201.901-3.561%202.405-5.149%200%200%20.855.008%201.767-.053.292-.019.375.041.321.254-.065.259-1.152%204.451-.16%207.245.679%201.912%202.21%202.527%203.117%202.527%201.063%200%202.079-.802%202.623-1.993a4%204%200%200%200%20.209.38c1.538%202.437%204.51%201.909%206.019-.157.341-.466.533-.869.533-.869.323%202.022%201.896%202.647%202.796%202.647.938%200%201.828-.385%202.551-2.094.03.752.078%201.368.153%201.562.046.119.312.267.506.34.858.318%201.734.167%202.057.102.224-.045.399-.226.424-.69.063-1.22.024-3.27.394-4.794.621-2.558%201.2-3.549%201.475-4.04.154-.275.328-.32.333-.03.013.59.042%202.319.283%204.644.177%201.709.413%202.72.594%203.04.518.914%201.157.958%201.677.958.331%200%201.024-.091.961-.673-.03-.284.023-2.037.635-4.556.399-1.646%201.066-3.132%201.307-3.675.089-.2.13-.043.129-.012-.051%201.133-.164%204.839.297%206.865.626%202.746%202.435%203.053%203.067%203.053%201.346%200%202.448-1.024%202.818-3.719.089-.649-.043-1.149-.439-1.149%22/%3E%3C/svg%3E") !important;
    background-position: -3px -7px !important;
    background-size: unset !important;
  }
  ._aa4c [aria-label="Two factor authentication lock icon"] {
    content: url("data:image/svg+xml,%3Csvg%20width%3D%2276%22%20height%3D%2276%22%20viewBox%3D%220%200%2076%2076%22%20fill%3D%22%231e66f5%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M38.49.004c-4.62-.066-9.374.71-14.079%202.456C7.41%208.766-2.782%2027.015.672%2044.969c2.997%2015.573%2014.442%2027.16%2029.91%2030.28%2023.375%204.714%2045.416-13.374%2045.416-37.271C75.998%2016.38%2058.508.288%2038.49.004m-.503%203.098c3.374%200%206.747.41%209.379%201.231C59.724%208.187%2067.739%2016.208%2071.63%2028.616c1.644%205.24%201.645%2013.474.002%2018.741-3.825%2012.263-11.866%2020.357-24.019%2024.174-6.902%202.169-15.31%201.747-22.419-1.125C5.896%2062.611-2.438%2040.654%206.89%2022.181c4.408-8.729%2011.704-14.725%2021.717-17.848%202.632-.82%206.006-1.231%209.38-1.231m15.47%201.416.082.04q-.02.04-.037.081a1%201%200%200%200-.045-.12m-.011.872q.015.042.034.08l-.093-.041a.3.3%200%200%200%20.059-.039M37.987%2021.69c-4.812%200-7.402%202.806-7.404%208.02%200%202.714-.056%202.839-1.26%202.839-1.61%200-3.961%201.21-4.358%202.243-.168.44-.306%203.79-.306%207.446%200%206.398.045%206.692%201.211%207.858l1.212%201.211h21.81l1.212-1.21c1.167-1.167%201.212-1.46%201.212-7.859%200-3.655-.139-7.006-.307-7.446-.397-1.033-2.748-2.243-4.359-2.243-1.203%200-1.259-.125-1.26-2.838%200-5.215-2.59-8.021-7.403-8.021m0%203.208c3.374%200%204.443%201.201%204.443%204.99v2.66h-8.885v-2.66c0-3.789%201.07-4.99%204.442-4.99m.084%2010.563c4.69.023%209.362.276%209.745.738.378.455.524%202.583.431%206.294l-.14%205.606-9.904.133c-5.447.073-10.057-.019-10.244-.205-.613-.614-.386-11.284.254-11.924.458-.458%205.167-.665%209.858-.642M38%2039.723a1.05%201.05%200%200%200-1.05%201.049%201.05%201.05%200%200%200%20.617.957v2.225h.865v-2.225a1.05%201.05%200%200%200%20.617-.957%201.05%201.05%200%200%200-1.05-1.05m15.607%2030.662a1%201%200%200%200-.084.14.2.2%200%200%200-.068-.072zm-.122.923q.031.056.078.098-.06.028-.123.053c.016-.05.029-.088.045-.151%22/%3E%3C/svg%3E");
  }
  ._aa4c img[src="/images/instagram/xig/web/illo-confirm-refresh-light.png"] {
    content: url("data:image/svg+xml,%3Csvg%20width%3D%2296%22%20height%3D%2295.986%22%20viewBox%3D%220%200%2025.4%2025.397%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22%231e66f5%22%3E%3Cpath%20d%3D%22M12.591.001c-1.934.008-2.265.045-3.353.374-.664.201-1.703.612-2.308.914s-1.582.931-2.172%201.396c-.589.466-1.436%201.287-1.883%201.825-.468.564-1.127%201.604-1.554%202.455C.913%207.777.45%208.923.292%209.514c-.234.872-.288%201.461-.292%203.152-.004%201.575.053%202.291.231%202.951.13.479.353%201.192.497%201.582.143.391.389.964.546%201.274s.581.994.943%201.519a14.4%2014.4%200%200%200%201.558%201.82c.496.476%201.263%201.109%201.706%201.408s1.112.698%201.487.887%201.069.477%201.543.638c.473.161%201.282.371%201.799.466s1.513.178%202.214.184%201.667-.05%202.146-.125%201.355-.293%201.945-.485%201.375-.501%201.744-.687a17%2017%200%200%200%201.475-.88c.443-.298%201.21-.932%201.706-1.408s1.197-1.295%201.559-1.82.81-1.257.995-1.626.494-1.154.685-1.744.41-1.465.485-1.945.136-1.385.136-2.012-.061-1.533-.136-2.012-.293-1.355-.485-1.945-.5-1.375-.685-1.744-.633-1.1-.994-1.626a14.4%2014.4%200%200%200-1.559-1.82c-.496-.476-1.286-1.125-1.757-1.443-.471-.317-1.289-.778-1.82-1.023S16.49.466%2015.868.297c-.969-.261-1.437-.304-3.277-.296m-.515.555.001.003h-.004q.002%200%20.003-.003m.65.254c1.324.011%202.002.084%202.817.303.59.158%201.58.531%202.2.827s1.435.763%201.811%201.036.972.764%201.324%201.09.938.995%201.302%201.486.906%201.402%201.203%202.025c.297.622.671%201.614.831%202.205.23.851.29%201.448.29%202.884%200%201.426-.061%202.039-.287%202.884-.158.59-.586%201.677-.95%202.414s-1%201.748-1.412%202.245-1.155%201.241-1.652%201.652c-.497.412-1.507%201.047-2.245%201.412s-1.824.787-2.414.937c-.599.153-1.696.299-2.482.331-.874.035-1.772-.013-2.369-.127a17%2017%200%200%201-1.677-.418%2016%2016%200%200%201-1.656-.7c-.517-.256-1.271-.709-1.677-1.006s-.999-.789-1.317-1.092c-.319-.303-.875-.948-1.235-1.432s-.899-1.39-1.197-2.012c-.297-.622-.667-1.615-.821-2.205s-.312-1.707-.35-2.482c-.055-1.1-.011-1.693.2-2.71.148-.716.474-1.772.723-2.348s.692-1.408.984-1.849.919-1.214%201.392-1.716S5.417%203.202%206.022%202.8s1.515-.903%202.024-1.112a18%2018%200%200%201%201.931-.637c.76-.194%201.432-.253%202.75-.242m3.229.115v.002l.006.004-.012-.003zm3.312%206.912c-.129%200-2.197%201.962-4.596%204.36l-4.363%204.361-2.077-2.08c-1.456-1.459-2.167-2.08-2.38-2.08-.225%200-.304.078-.304.3%200%20.21.679.98%202.245%202.549%201.413%201.415%202.345%202.248%202.514%202.248.174%200%201.838-1.568%204.73-4.459%203.7-3.699%204.461-4.523%204.461-4.829%200-.262-.068-.369-.234-.369m5.624%202.252.004.015q-.003-.004-.008-.007zm-.303.013.006.003-.004.005zM7.614%2023.749l.019.009-.004.016q-.006-.013-.014-.024m8.544.584-.001.003-.004-.002zm.004.306.003.001-.005.001z%22/%3E%3C/svg%3E");
  }
  ._aa4c [style*='background-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png")'] {
    /* No photo icon */
    /* Private page icon */
  }
  ._aa4c [style*='background-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png")'][style*="background-position: 0px -97px"] {
    filter: none;
    background: #8839ef !important;
    background: radial-gradient(circle at 30% 107%, #df8e1d 0%, #df8e1d 5%, #fe640b 45%, #8839ef 60%, #1e66f5 90%) !important;
    mask-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png");
    mask-position: 0 -97px;
  }
  ._aa4c [style*='background-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png")'][style*="background-position: -49px -97px"] {
    filter: none;
    background: #8839ef !important;
    background: radial-gradient(circle at 30% 107%, #df8e1d 0%, #df8e1d 5%, #fe640b 45%, #8839ef 60%, #1e66f5 90%) !important;
    mask-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png");
    mask-position: -49px -97px;
  }
  ._aa4c [style*='background-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png")'][style*="background-position: -49px 0px"] {
    filter: none;
    background: #8839ef !important;
    background: radial-gradient(circle at 30% 107%, #df8e1d 0%, #df8e1d 5%, #fe640b 45%, #8839ef 60%, #1e66f5 90%) !important;
    mask-image: url("https://static.cdninstagram.com/rsrc.php/v3/y4/r/ewSyA8IItw_.png");
    mask-position: -49px 0;
  }
  ._aa4c ._aaqh {
    background-color: #ccd0da;
  }
  ._aa4c .xzloghq,
  ._aa4c ._acas:not(._acao),
  ._aa4c .xzloghq svg,
  ._aa4c ._acas:not(._acao) svg {
    color: #dce0e8;
    fill: #e6e9ef;
  }
  ._aa4c ._acas:not(._acao):hover {
    background-color: #ccd0da !important;
    color: #1e66f5 !important;
  }
  ._aa4c .x1gjpkn9,
  ._aa4c ._acat,
  ._aa4c ._acap,
  a._aa4c .x1gjpkn9,
  a._aa4c ._acat,
  a._aa4c ._acap,
  ._aa4c .x1gjpkn9:visited,
  ._aa4c ._acat:visited,
  ._aa4c ._acap:visited,
  a._aa4c .x1gjpkn9:visited,
  a._aa4c ._acat:visited,
  a._aa4c ._acap:visited {
    color: #4c4f69;
  }
  ._aa4c div:has(> .x1mu97ne) {
    background-color: #dce0e8;
    border-color: #9ca0b0;
    box-shadow: 0 10px 35px 2px rgba(220, 224, 232, 0.993);
  }
  ._aa4c .x7r02ix[role="dialog"] {
    box-shadow: 0 5px 10px 0 rgba(220, 224, 232, 0.995);
  }
  ._aa4c ._ab81 {
    background-color: #e6e9ef;
  }
  ._aa4c ._ab85,
  ._aa4c ._ab6i,
  ._aa4c ._ab85 .xvbhtw8,
  ._aa4c ._aav4 {
    background-color: #dce0e8;
  }
  ._aa4c ._abmp {
    color: #4c4f69;
  }
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Collection"] {
    background-color: #eff1f5 !important;
  }
  ._aa4c div[data-bloks-name="bk.components.Flexbox"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"] {
    /* Radios have left padding */
    padding-left: 0 !important;
    /* The heading */
    /* Radios */
    /* That "border" */
  }
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="background: rgb(0\, 0\, 0)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="background: rgb(0\, 0\, 0)"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="background: rgb(255\, 255\, 255)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="background: rgb(255\, 255\, 255)"] {
    background-color: #eff1f5 !important;
  }
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"] {
    /* Selected radio */
    /* Not selected radio */
  }
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(0\, 149\, 246)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(0\, 149\, 246)"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(0\, 149\, 246)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(0\, 149\, 246)"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(0\, 149\, 246)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(0\, 149\, 246)"] {
    background-color: #1e66f5 !important;
  }
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(219\, 219\, 219)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(219\, 219\, 219)"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(219\, 219\, 219)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(219\, 219\, 219)"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(219\, 219\, 219)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(219\, 219\, 219)"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(38\, 38\, 38)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(38\, 38\, 38)"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(38\, 38\, 38)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(38\, 38\, 38)"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(38\, 38\, 38)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(38\, 38\, 38)"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(54\, 54\, 54)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(54\, 54\, 54)"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(54\, 54\, 54)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(54\, 54\, 54)"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(54\, 54\, 54)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(54\, 54\, 54)"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(255\, 255\, 255)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 10.5px"][style*="background: rgb(255\, 255\, 255)"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(255\, 255\, 255)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 12px"][style*="background: rgb(255\, 255\, 255)"],
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(255\, 255\, 255)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="border-radius: 4px"][style*="background: rgb(255\, 255\, 255)"] {
    background-color: #ccd0da !important;
  }
  ._aa4c div[data-bloks-name="bk.components.Flexbox"][style*="background: rgb(38\, 38\, 38)"],
  ._aa4c .wbloks_1[data-bloks-name="bk.components.Flexbox"][style*="background: rgb(38\, 38\, 38)"] {
    display: none;
  }
  ._aa4c span[data-bloks-name="bk.components.TextSpan"][style*="color: rgb(250\, 250\, 250)"],
  ._aa4c span[data-bloks-name="bk.components.Text"][style*="color: rgb(250\, 250\, 250)"],
  ._aa4c span[data-bloks-name="bk.components.TextSpan"][style*="color: rgb(224\, 241\, 255)"],
  ._aa4c span[data-bloks-name="bk.components.Text"][style*="color: rgb(224\, 241\, 255)"],
  ._aa4c span[data-bloks-name="bk.components.TextSpan"][style*="color: rgb(0\, 55\, 107)"],
  ._aa4c span[data-bloks-name="bk.components.Text"][style*="color: rgb(0\, 55\, 107)"],
  ._aa4c span[data-bloks-name="bk.components.TextSpan"][style*="color: rgb(38\, 38\, 38)"],
  ._aa4c span[data-bloks-name="bk.components.Text"][style*="color: rgb(38\, 38\, 38)"] {
    color: #4c4f69 !important;
  }
  ._aa4c span[data-bloks-name="bk.components.TextSpan"][style*="color: rgb(142\, 142\, 142)"],
  ._aa4c span[data-bloks-name="bk.components.Text"][style*="color: rgb(142\, 142\, 142)"] {
    color: #6c6f85 !important;
  }
  ._aa4c .leaflet-popup-content-wrapper,
  ._aa4c .leaflet-popup-tip {
    background-color: #e6e9ef;
    box-shadow: 0 5px 15px rgba(220, 224, 232, 0.996);
  }
  ._aa4c .leaflet-popup-content-wrapper *,
  ._aa4c .leaflet-popup-tip * {
    color: #4c4f69 !important;
  }
  ._aa4c ::-webkit-scrollbar {
    background-color: #dce0e8;
  }
  ._aa4c ::-webkit-scrollbar-thumb {
    background-color: #1e66f5;
    border-radius: 10px;
  }
}
@-moz-document regexp('^.*instagram.com/direct.*') {
  ._aa4d {
    /* Chat background */
    /* messages you've sent */
    /* sidebar */
    /* New Chat Button */
    /* Chat button */
    /* notes */
    /* explicit music icon in notes */
  }
  ._aa4d .x11jlvup {
    --chat-outgoing-message-bubble-background-color: #89b4fa;
  }
  ._aa4d .x1n2onr6 {
    --chat-incoming-message-bubble-background-color: #313244;
  }
  ._aa4d .xnz67gz {
    background-color: #1e1e2e;
  }
  ._aa4d .xyk4ms5 {
    color: #11111b !important;
  }
  ._aa4d .xvbhtw8 {
    background-color: #181825;
  }
  ._aa4d .x186z157,
  ._aa4d .xk50ysn,
  ._aa4d .xi81zsa {
    color: #a6adc8 !important;
  }
  ._aa4d .xk5f4mz {
    background-color: #313244;
  }
  ._aa4d .x1i10hfl:hover {
    background-color: #313244;
    color: #cdd6f4;
  }
  ._aa4d .xsnw5ke,
  ._aa4d .x3zg9eu::after {
    background-color: #313244;
  }
  ._aa4d .x103n6ev,
  ._aa4d .xzxgvzf {
    background-image: linear-gradient(-90deg, rgba(49, 50, 68, 0.3), #313244);
  }
  ._aa4d .x1cp0k07 {
    color: #cdd6f4;
  }
  ._aa4c {
    /* Chat background */
    /* messages you've sent */
    /* sidebar */
    /* New Chat Button */
    /* Chat button */
    /* notes */
    /* explicit music icon in notes */
  }
  ._aa4c .x11jlvup {
    --chat-outgoing-message-bubble-background-color: #1e66f5;
  }
  ._aa4c .x1n2onr6 {
    --chat-incoming-message-bubble-background-color: #ccd0da;
  }
  ._aa4c .xnz67gz {
    background-color: #eff1f5;
  }
  ._aa4c .xyk4ms5 {
    color: #dce0e8 !important;
  }
  ._aa4c .xvbhtw8 {
    background-color: #e6e9ef;
  }
  ._aa4c .x186z157,
  ._aa4c .xk50ysn,
  ._aa4c .xi81zsa {
    color: #6c6f85 !important;
  }
  ._aa4c .xk5f4mz {
    background-color: #ccd0da;
  }
  ._aa4c .x1i10hfl:hover {
    background-color: #ccd0da;
    color: #4c4f69;
  }
  ._aa4c .xsnw5ke,
  ._aa4c .x3zg9eu::after {
    background-color: #ccd0da;
  }
  ._aa4c .x103n6ev,
  ._aa4c .xzxgvzf {
    background-image: linear-gradient(-90deg, rgba(204, 208, 218, 0.3), #ccd0da);
  }
  ._aa4c .x1cp0k07 {
    color: #4c4f69;
  }
}
/* prettier-ignore */
`)