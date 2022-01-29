import React from 'react'
import Svg, {Path} from 'react-native-svg'

const OptionsIcon = ({color}) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3.5 6C3.30222 6 3.10888 6.05865 2.94443 6.16853C2.77998 6.27841 2.65181 6.43459 2.57612 6.61732C2.50043 6.80004 2.48063 7.00111 2.51922 7.19509C2.5578 7.38907 2.65304 7.56725 2.79289 7.70711C2.93275 7.84696 3.11093 7.9422 3.30491 7.98079C3.49889 8.01937 3.69996 7.99957 3.88268 7.92388C4.06541 7.84819 4.22159 7.72002 4.33147 7.55557C4.44135 7.39112 4.5 7.19778 4.5 7C4.5 6.73478 4.39464 6.48043 4.20711 6.29289C4.01957 6.10536 3.76522 6 3.5 6ZM7.5 8H21.5C21.7652 8 22.0196 7.89464 22.2071 7.70711C22.3946 7.51957 22.5 7.26522 22.5 7C22.5 6.73478 22.3946 6.48043 22.2071 6.29289C22.0196 6.10536 21.7652 6 21.5 6H7.5C7.23478 6 6.98043 6.10536 6.79289 6.29289C6.60536 6.48043 6.5 6.73478 6.5 7C6.5 7.26522 6.60536 7.51957 6.79289 7.70711C6.98043 7.89464 7.23478 8 7.5 8ZM7.5 11C7.30222 11 7.10888 11.0586 6.94443 11.1685C6.77998 11.2784 6.65181 11.4346 6.57612 11.6173C6.50043 11.8 6.48063 12.0011 6.51922 12.1951C6.5578 12.3891 6.65304 12.5673 6.79289 12.7071C6.93275 12.847 7.11093 12.9422 7.30491 12.9808C7.49889 13.0194 7.69996 12.9996 7.88268 12.9239C8.06541 12.8482 8.22159 12.72 8.33147 12.5556C8.44135 12.3911 8.5 12.1978 8.5 12C8.5 11.7348 8.39464 11.4804 8.20711 11.2929C8.01957 11.1054 7.76522 11 7.5 11ZM11.5 16C11.3022 16 11.1089 16.0586 10.9444 16.1685C10.78 16.2784 10.6518 16.4346 10.5761 16.6173C10.5004 16.8 10.4806 17.0011 10.5192 17.1951C10.5578 17.3891 10.653 17.5673 10.7929 17.7071C10.9327 17.847 11.1109 17.9422 11.3049 17.9808C11.4989 18.0194 11.7 17.9996 11.8827 17.9239C12.0654 17.8482 12.2216 17.72 12.3315 17.5556C12.4414 17.3911 12.5 17.1978 12.5 17C12.5 16.7348 12.3946 16.4804 12.2071 16.2929C12.0196 16.1054 11.7652 16 11.5 16ZM21.5 11H11.5C11.2348 11 10.9804 11.1054 10.7929 11.2929C10.6054 11.4804 10.5 11.7348 10.5 12C10.5 12.2652 10.6054 12.5196 10.7929 12.7071C10.9804 12.8946 11.2348 13 11.5 13H21.5C21.7652 13 22.0196 12.8946 22.2071 12.7071C22.3946 12.5196 22.5 12.2652 22.5 12C22.5 11.7348 22.3946 11.4804 22.2071 11.2929C22.0196 11.1054 21.7652 11 21.5 11ZM21.5 16H15.5C15.2348 16 14.9804 16.1054 14.7929 16.2929C14.6054 16.4804 14.5 16.7348 14.5 17C14.5 17.2652 14.6054 17.5196 14.7929 17.7071C14.9804 17.8946 15.2348 18 15.5 18H21.5C21.7652 18 22.0196 17.8946 22.2071 17.7071C22.3946 17.5196 22.5 17.2652 22.5 17C22.5 16.7348 22.3946 16.4804 22.2071 16.2929C22.0196 16.1054 21.7652 16 21.5 16Z"
        fill={color}
      />
    </Svg>
  )
}

export {OptionsIcon}