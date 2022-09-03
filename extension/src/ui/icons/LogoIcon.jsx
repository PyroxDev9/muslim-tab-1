export default function LogoIcon(props) {
  return (
    <svg
      height={props.size || '1em'}
      viewBox='0 0 120 96'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.5577 0.119067C17.1641 0.580664 12.8562 2.30031 9.3056 5.00988C8.28627 5.78773 6.22719 7.80527 5.36822 8.86769C2.40429 12.5335 0.613678 16.9125 0.123713 21.6925C0.0381883 22.5272 -0.00241187 31.2019 0.000110621 48.097C0.00407454 74.5749 0.00131178 74.4228 0.530916 76.9191C2.76176 87.434 11.8963 95.2635 22.6088 95.8427L24.0202 95.9191V59.9547V23.9902H59.9958H95.9714V47.9948V71.9994L83.9895 71.9688L72.0077 71.9382L71.977 59.9662L71.9464 47.9942H59.9952H48.0439L48.0461 60.9264C48.0485 74.7065 48.0545 74.8711 48.6463 77.3851C50.7756 86.4282 58.1074 93.5886 67.0828 95.3903C69.5153 95.8785 70.3505 95.9001 84.9204 95.8515C100.314 95.8001 99.239 95.8504 102.299 95.0394C106.126 94.025 109.896 91.8727 112.728 89.0852C116.862 85.017 119.286 79.9564 119.87 74.1759C120.045 72.4427 120.043 23.4007 119.868 21.6925C119.399 17.1213 117.735 12.9086 114.967 9.28776C114.189 8.26927 112.17 6.21188 111.106 5.35362C107.438 2.39213 103.055 0.602988 98.2709 0.113426C96.7572 -0.0414001 23.034 -0.0359992 21.5577 0.119067Z'
        fill={props.color || '#fff'}
        stroke={props.color || '#fff'}
      />
    </svg>
  );
}
