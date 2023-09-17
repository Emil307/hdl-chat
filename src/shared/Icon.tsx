import React, {useMemo} from 'react';

const ICONS: any = {
  plus: {
    path: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z"
          fill="currentColor"
        />
      </>
    ),
    viewbox: '0 0 14 14'
  },
  profile: {
    path: (
      <>
        <path
          d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z"
          stroke="black"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M3.875 27C5.10367 24.8714 6.87104 23.1038 8.99944 21.8749C11.1278 20.6459 13.5423 19.9989 16 19.9989C18.4577 19.9989 20.8722 20.6459 23.0006 21.8749C25.129 23.1038 26.8963 24.8714 28.125 27"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    viewbox: '0 0 32 32'
  },
  chats: {
    path: (
      <>
        <path d="M4.25626 16.5938C3.13959 14.7098 2.74899 12.483 3.1578 10.3314C3.5666 8.17983 4.74669 6.25146 6.47652 4.90832C8.20636 3.56517 10.367 2.89961 12.5527 3.0366C14.7385 3.17358 16.7991 4.10368 18.3477 5.65229C19.8963 7.20089 20.8264 9.26151 20.9634 11.4473C21.1004 13.6331 20.4348 15.7937 19.0917 17.5235C17.7486 19.2533 15.8202 20.4334 13.6686 20.8422C11.5171 21.251 9.29025 20.8604 7.40626 19.7438V19.7438L4.29376 20.625C4.16624 20.6623 4.03103 20.6646 3.90231 20.6317C3.77359 20.5988 3.6561 20.5318 3.56215 20.4379C3.4682 20.3439 3.40126 20.2264 3.36833 20.0977C3.33541 19.969 3.33771 19.8338 3.37501 19.7063L4.25626 16.5938Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z" fill="white"/>
        <path d="M7.5 13.125C8.12132 13.125 8.625 12.6213 8.625 12C8.625 11.3787 8.12132 10.875 7.5 10.875C6.87868 10.875 6.375 11.3787 6.375 12C6.375 12.6213 6.87868 13.125 7.5 13.125Z" fill="white"/>
        <path d="M16.5 13.125C17.1213 13.125 17.625 12.6213 17.625 12C17.625 11.3787 17.1213 10.875 16.5 10.875C15.8787 10.875 15.375 11.3787 15.375 12C15.375 12.6213 15.8787 13.125 16.5 13.125Z" fill="white"/>
      </>
    ),
    viewbox: '0 0 24 24'
  }
};

interface Props {
  name: string,
  width?: string,
  height?: string,
  opacity?: string,
  rotate?: string,
  color?: string,
  scaleX?: string,
  scaleY?: string,
  onClick?: () => void,
  styles?: {},
}

export const Icon: React.FC<Props> = ({name, width, height, opacity, rotate, color, scaleX, scaleY, onClick, styles}) => {
  const size = ICONS[name].viewbox.split(' '); 
  const transform = useMemo(() => {
    let res = '';
    if (rotate) res += `rotate(${rotate}deg) `;
    if (scaleX) res += `scaleX(${scaleX}) `;
    if (scaleY) res += `scaleY(${scaleY}) `;
    return res;
  }, [rotate, scaleX, scaleY]);

  const style = {
    transform,
    color: color || '',
     ...styles
  };
  return (
    <svg
      onClick={onClick}
      style={style}
      width={width || size[2]}
      height={height || size[3]}
      viewBox={ICONS[name].viewbox}
      fill={color || 'none'}
      opacity={opacity}
      xmlns="http://www.w3.org/2000/svg"
    >
      {ICONS[name].path}
    </svg>
  );
};
