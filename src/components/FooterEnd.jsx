import React from 'react';
import fb from '../static/footer/Facebook_34.png';
import instagram from '../static/footer/Instagram_34.png';
import linkedin from '../static/footer/Linkedin_34.png';
import tiktok from '../static/footer/TikTok_34.png';
import youtube from '../static/footer/YouTube_34.png';
import vietnam from '../static/footer/vietnam.png';
import indo from '../static/footer/indo.png';
import singapo from '../static/footer/singapo.png';
import malaysia from '../static/footer/malaysia.png';
import thailan from '../static/footer/thailan.png';
import philippin from '../static/footer/philippin.png';

const SEA = () =>
{
  const data = [
    { src: indo, alt: 'Cờ', href: '.' },
    { src: malaysia, alt: 'Cờ', href: '.' },
    { src: philippin, alt: 'Cờ', href: '.' },
    { src: singapo, alt: 'Cờ', href: '.' },
    { src: thailan, alt: 'Cờ', href: '.' },
    { src: vietnam, alt: 'Cờ', href: '.' }
  ];
  return (
    <div>
      <h4>Lazada Southeast Asia</h4>
      <div className="flex flex-row">
        {data.map((v, i) => (
          <a key={i} href={v.href} className="mr-0.5">
            <img src={v.src} alt={v.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

const KetNoiVoiChungToi = () =>
{
  const data = [
    { src: fb, alt: 'Facebook', href: 'https://www.example.com' },
    { src: linkedin, alt: 'LinkedIn', href: 'https://www.example.com' },
    { src: youtube, alt: 'Youtube', href: 'https://www.example.com' },
    { src: instagram, alt: 'Instagram', href: 'https://www.example.com' },
    { src: tiktok, alt: 'TikTok', href: 'https://www.example.com' }
  ];
  return (
    <div>
      <h4>Kết nối với chúng tôi</h4>
      <div className="flex flex-row">
        {data.map((v) => (
          <a key={v.alt} href={v.href} className="mr-0.5">
            <img src={v.src} alt={v.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

const FooterEnd = () => (
  <div className="container max-w-screen-xl flex flex-row justify-between mx-auto py-11">
    <SEA />
    <KetNoiVoiChungToi />
    <h4>&copy; Lazada 2024</h4>
  </div>
);

export default FooterEnd;
