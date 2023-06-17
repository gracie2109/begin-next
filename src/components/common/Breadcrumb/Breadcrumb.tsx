import Link from 'next/link';
import React from 'react';
import { Breadcrumb } from 'antd';
import { formatWord } from '@/utils';
import { useRouter } from 'next/router';

export const BreadcrumbCustom = () => {
  const router = useRouter()
  const linkPath = router.asPath.split('/');
  linkPath.shift();
  const pathArray = linkPath.map((path, i) => {
    return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
  });

  const data = pathArray.map((item) => {
    return {
      title: (<Link href={`${item.href}`} key={item.breadcrumb}>{formatWord(item.breadcrumb, "title")}</Link>)
    }
  })

  return (
    <Breadcrumb
      style={{ paddingLeft: "1rem",paddingTop: '1rem', textAlign: "center"}}
      separator=">"
      items={data}
    />

  );
};
