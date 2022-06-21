import React from 'react';
import Link from "@mui/material/Link";

type PageLinkProps = {
  text: string
  url?: string
  onClick?: () => void
}

const PageLink: React.FC<PageLinkProps> = (props: PageLinkProps) => {

  const {text} = props;

  return (
    <Link sx={{
      fontSize: '1.5em',
      cursor: 'pointer',
    }} onClick={props.onClick}>
      {text}
    </Link>
  )
};

export default PageLink;