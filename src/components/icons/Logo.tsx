import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <>
      <picture>
        <source
          media="(min-width: 320px) and (max-width: 750px)"
          srcSet="https://static.wixstatic.com/media/6aa1ce_ee6be6bc30454cfb89cda394772531a3~mv2.png/v1/fill/w_79,h_112,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/VL%20%E2%80%A2%20Spa%20Romantik%20compactado.png"
          data-srcset="https://static.wixstatic.com/media/6aa1ce_ee6be6bc30454cfb89cda394772531a3~mv2.png/v1/fill/w_79,h_112,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/VL%20%E2%80%A2%20Spa%20Romantik%20compactado.png"
        />

        <Image
          src="https://static.wixstatic.com/media/6aa1ce_ee6be6bc30454cfb89cda394772531a3~mv2.png/v1/fill/w_79,h_112,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/VL%20%E2%80%A2%20Spa%20Romantik%20compactado.png"
          alt=""
          width={67}
          height={97}
        />
      </picture>
    </>
  );
}

export default Logo;
