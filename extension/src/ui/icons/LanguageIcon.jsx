export default function ViewIcon(props) {
  return (
    <svg
      width={props.size || '1em'}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.0913 3.26467 14.1827 3.60145 15.1296C4.1276 16.609 4.39067 17.3486 4.4171 17.7689C4.44675 18.2406 4.4246 18.4195 4.28084 18.8697C4.15275 19.2709 3.84348 19.7348 3.22496 20.6626L3 21H12Z'
        fill={props.color || '#fff'}
        fillOpacity='0.15'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill={props.color || '#fff'}
        d='M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 12.9766 3.98831 13.9792 4.30809 14.8783L4.31311 14.8924C4.57194 15.6201 4.77257 16.1842 4.91114 16.6183C5.04587 17.0403 5.14598 17.4095 5.16562 17.7218C5.1813 17.9712 5.18681 18.1893 5.15832 18.4195C5.12983 18.6497 5.0713 18.8599 4.9953 19.0979C4.90459 19.382 4.75975 19.6573 4.57853 19.9569C4.52322 20.0483 4.46217 20.1457 4.39535 20.25H12C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75H3C2.7234 21.75 2.46926 21.5978 2.33874 21.3539C2.20823 21.11 2.22253 20.8141 2.37596 20.584L2.60092 20.2465C2.91394 19.777 3.13499 19.4451 3.29509 19.1805C3.45516 18.9159 3.529 18.7587 3.56638 18.6416C3.63414 18.4294 3.65857 18.325 3.66968 18.2352C3.68079 18.1455 3.68255 18.0383 3.66857 17.816C3.66179 17.7081 3.61715 17.4972 3.48219 17.0745C3.35199 16.6666 3.1597 16.1257 2.89482 15.3809C2.54104 14.3862 2.25 13.2061 2.25 12ZM7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H16C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H12C12.4142 14.75 12.75 14.4142 12.75 14C12.75 13.5858 12.4142 13.25 12 13.25H8Z'
      />
    </svg>
  );
}
