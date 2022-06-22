import React, {PropsWithChildren} from 'react';
import QRCode from "react-qr-code";

type TokenQRProps = {
  tokenNumber: number,
  bgColor?: string
  size?: number
}

const TokenQR: React.FC<TokenQRProps> = (props: TokenQRProps) => {

  const {tokenNumber, bgColor, size} = props;

  return (
    <QRCode value={tokenNumber + ''}
            size={size}
            bgColor={bgColor}/>
  )
};

export default TokenQR;