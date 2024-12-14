import axiosInstance from "./axiosInstance";

export const fetchProducts = async (query: string) => {
  try {
    const response = await axiosInstance.get(`/products?search=${query}`);
    return response.data;
  } catch (error) {}
  return {
    current_page: 1,
    total_pages: 2,
    records_per_page: 20,
    products: [
      {
        name: "PHOTO CAMERA CANON EOS R100 + RFS 18-45",
        title:
          "Camera foto Canon Eos R100 + Obiectiv RF-S 18-45mm F/4.5-6.3 IS STM kit, Senzor CMOS 22.3 x 14.9mm, 24.1 Megapixeli, Aspect Ratio: 3:2, Procesor:DIGIC 8, Montura RF, Compatibilitate: RF, RF-S, (EF si EF-S cu adaptor), Distanta focla: 1.6x, Dual Pixel CMOS AF System, One-Shot AF and Servo AF, Face+",
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 12,
        warranty_type: "",
        min_quantity: 1,
        price: 499.08,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 499.0,
        discount: ".00",
        green_stamp_value: 0.4,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "974e78d1c69c77a7016a78666727f933",
        code: "6052C034AA",
        original_code: "",
        product_category_id: 167,
        product_category_name: "Aparate foto Mirrorless",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 2479.63,
        ron_catalog_price: 2479.23,
        promo_price: 499.08,
        ron_promo_price: 2479.63,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_3558c9beab76595e4f3287808747c51d.jpg",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_3558c9beab76595e4f3287808747c51d.jpg",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_87c87b691d4b0065bd47494b189c9475.png",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_87c87b691d4b0065bd47494b189c9475.png",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_92390163706554ace4512e32a0b17cdc.png",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_92390163706554ace4512e32a0b17cdc.png",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_8b7faecd127237019c8fa0f29726324a.png",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_8b7faecd127237019c8fa0f29726324a.png",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_4bad36d07776683100379d70aba0057b.png",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_4bad36d07776683100379d70aba0057b.png",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_12dd6d868d016735ef372363823b27e4.png",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_12dd6d868d016735ef372363823b27e4.png",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_ab08613fec6e61b2e1ce7fecf842d8cd.png",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_ab08613fec6e61b2e1ce7fecf842d8cd.png",
          },
        ],
        description:
          'Camera foto Canon Eos R100 + Obiectiv RF-S 18-45mm F/4.5-6.3 IS STM kit, Senzor CMOS 22.3 x 14.9mm, 24.1 Megapixeli, Aspect Ratio: 3:2, Procesor:DIGIC 8, Montura RF, Compatibilitate: RF, RF-S, (EF si EF-S cu adaptor), Distanta focla: 1.6x, Dual Pixel CMOS AF System, One-Shot AF and Servo AF, Face+ Tracking, Spot AF, 1-point AF, Zone AF, Viteza shutter: 30 - 1/4000 sec, Viewfinder OLED 2,360,000 puncte, Display 3" 1,040,000 puncte, Blitz integrat, Format fotografii: JPEG, RAW, Video: MP4: MPEG-4 AVC/H.264, Audio: AAC, 4K, Interfata: USB, WI-FI, Micro HDMI, Carduri compatibile: SD, SDHC, SDXC (UHS-I compatible), Dimensiuni: 116.3 x 85.5 x 68.8mm, Greutate: 356g, Baterie LP-E17 (aprox 340 cadre.',
        long_description: null,
        ean: "8714574676449",
        recommended_product_ids: [],
      },
      {
        name: "PHOTO CAMERA CANON SX740HS SILVER",
        title:
          'Camera foto Canon PowerShot SX740HS Silver, 20.3 MP, senzor CMOS tip 1/2,3, cu iluminare din spate, 40x Zoom optic, 40x Zoom digital, 3" LCD rabatabil, processor imagine DIGIC 8, focalizare TTL, ISO100-3200, WiFi, GPS, Bluetooth, efecte fotografice, filmare 4K/ 25 fps, compatibil SD/SDHC/SDXC, HDMI',
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 24,
        warranty_type: "",
        min_quantity: 1,
        price: 333.15,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 333.0,
        discount: ".00",
        green_stamp_value: 0.75,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "de522bd52692d9232aac971c0a050769",
        code: "2956C002AA",
        original_code: "",
        product_category_id: 165,
        product_category_name: "Aparate foto compacte",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 1655.23,
        ron_catalog_price: 1654.48,
        promo_price: 333.15,
        ron_promo_price: 1655.23,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_0f56ed78a7661b6d96f3c99e0104a2a4.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_0f56ed78a7661b6d96f3c99e0104a2a4.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_1a37db67e44181fbcbb4086486b31f73.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_1a37db67e44181fbcbb4086486b31f73.JPG",
          },
        ],
        description:
          'Camera foto Canon PowerShot SX740HS Silver, 20.3 MP, senzor CMOS tip 1/2,3, cu iluminare din spate, 40x Zoom optic, 40x Zoom digital, 3" LCD rabatabil, processor imagine DIGIC 8, focalizare TTL, ISO100-3200, WiFi, GPS, Bluetooth, efecte fotografice, filmare 4K/ 25 fps, compatibil SD/SDHC/SDXC, HDMI micro, acumulator Li-ion NB 13L, blitz integrat, culoare negru, greutate 299 grame.',
        long_description: null,
        ean: "4549292119053",
        recommended_product_ids: [],
      },
      {
        name: "Sony A7 IV Camera Foto Mirrorless Full-F",
        title:
          "Body Aparat foto SONY A7 Mark IV Mirrorless, 33 MP, ISO 51200 (Extins: 204800), 1/8000s, 4K @60, CFexpress A/x2 SD UHS I-II, Rafala 10 cps, WiFi/Bluetooth, Senzor Full Frame, Montura Sony FE",
        manufacturer_id: "811200fcda087a6ef5d83876000f390e",
        manufacturer_name: "SONY",
        warranty: 24,
        warranty_type: "",
        min_quantity: 1,
        price: 8920.75,
        special_price: 1,
        special_price_valid_to: "2024-12-31",
        catalog_price: 12223.2,
        discount: ".00",
        green_stamp_value: 0.75,
        currency: "RON",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "a3fbd0753491d7ca8ac187daf5f41e3a",
        code: "ILCE7M4B.CEC",
        original_code: "",
        product_category_id: 167,
        product_category_name: "Aparate foto Mirrorless",
        stock_value: 2,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 8920.75,
        ron_catalog_price: 12223.2,
        promo_price: 8920.75,
        ron_promo_price: 8920.75,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_1b2f25554ec0fe72bd741c73cb7bae81.jpg",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_1b2f25554ec0fe72bd741c73cb7bae81.jpg",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_095bc7876cae44e60071c6cdd5c361e1.jpg",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_095bc7876cae44e60071c6cdd5c361e1.jpg",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_b6f813b2ebe6d7edfce8c4e9937b4b68.jpg",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_b6f813b2ebe6d7edfce8c4e9937b4b68.jpg",
          },
        ],
        description:
          "Body Aparat foto SONY A7 Mark IV Mirrorless, 20MP, ISO 51200 (Extins: 204800), 1/8000s, 4K @60, CFexpress A/x2 SD UHS I-II, Rafala 10cps, WiFi/Bluetooth, Senzor Full Frame, Montura Sony FE",
        long_description: null,
        ean: "4548736133754",
        recommended_product_ids: [],
      },
      {
        name: "PHOTO CAMERA CANON EOS R10 + RF-S 18-45",
        title:
          "Camera foto Canon Mirrorless EOS R10 kit + obiectiv RF-S 18-45mm F4.5- 6.3 IS STM , Black, sensor APS-C 24.2 MP,rezolutie sensor imagine: CMOS, 22,3 x 14,8 mm, Raport de aspect: 3:2, sistem curatare integrat, Procesor imagine Digic X, Montură obiectiv: RF, Distanţă focală: 1.6 X, Focalizare: Dual",
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 12,
        warranty_type: "",
        min_quantity: 1,
        price: 915.08,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 915.0,
        discount: ".00",
        green_stamp_value: 0.4,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "16c5848547f5ebb7eac7470c2de9c2a8",
        code: "5331C033AA",
        original_code: "",
        product_category_id: 167,
        product_category_name: "Aparate foto Mirrorless",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 4546.49,
        ron_catalog_price: 4546.09,
        promo_price: 915.08,
        ron_promo_price: 4546.49,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_8952c7967b05fdc8b5c8274dedc58837.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_8952c7967b05fdc8b5c8274dedc58837.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_ebcdc2a5fe1291565ecd2e2f0839cf90.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_ebcdc2a5fe1291565ecd2e2f0839cf90.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_c73264c7a2cccbb71b7e343e90bfaaaa.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_c73264c7a2cccbb71b7e343e90bfaaaa.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_0dd4d364a14f43f2e57d671b3405b10e.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_0dd4d364a14f43f2e57d671b3405b10e.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_bb9e7731ab2b9cba69d90779e0195753.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_bb9e7731ab2b9cba69d90779e0195753.JPG",
          },
        ],
        description:
          'Camera foto Canon Mirrorless EOS R10 kit + obiectiv RF-S 18-45mm F4.5- 6.3 IS STM , Black, sensor APS-C 24.2 MP,rezolutie sensor imagine: CMOS, 22,3 x 14,8 mm, Raport de aspect: 3:2, sistem curatare integrat, Procesor imagine Digic X, Montură obiectiv: RF, Distanţă focală: 1.6 X, Focalizare: Dual Pixel CMOS AF II, Puncte focalizare: Cu zonă 100 % pe orizontală şi 100 % pe verticală (selectare automată) 90 % pe orizontală şi 100 % pe verticală (selectare manuală), Sensibilitate ISO: Auto 100 - 32000, se poate extinde la H:51200, vizor electronic OLED 0.39", 2.36mil puncte, 1024 x 768, LCD 2.95" 1.04 mil puncte, tactil, filmare MP4: 4K UHD, Full HD (16:9), 4K / Full HD: H.265 / HEVC, audio: AAC / PCM linear, 4K / Full HD: H.264 / MPEG-4 AVC, audio: AAC / PCM liniar, Rafala 15 CPS, WIFI, Bluetooth, Interfata: USB C SuperSpeed USB 3.2 Gen 2, mini HDMI, Stocare: SD/SDHC/SDXC şi UHS-II, Baterie Li-ion reîncărcabilă LP-E17 (inclusă), Cu LCD aprox. 430 de fotografii (la 23 °C), Cu vizor aprox. 260 de fotografii (la 23 °C), Încărcător de baterii LC-E17E (inclus).',
        long_description: null,
        ean: "8714574670584",
        recommended_product_ids: [],
      },
      {
        name: "PHOTO CAMERA CANON EOS R10 + RF-S 18-150",
        title:
          "Camera foto Canon Mirrorless EOS R10 kit + obiectiv RF-S 18-150mm F3.5- 6.3 IS STM , Black, sensor APS-C 24.2 MP,rezolutie sensor imagine: CMOS, 22,3 x 14,8 mm, Raport de aspect: 3:2, sistem curatare integrat, Procesor imagine Digic X, Montură obiectiv: RF, Distanţă focală: 1.6 X,  Focalizare: Dual",
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 12,
        warranty_type: "",
        min_quantity: 1,
        price: 1140.08,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 1140.0,
        discount: ".00",
        green_stamp_value: 0.4,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "42d3b98b44395f2eed8357b8ab1c22ce",
        code: "5331C029AA",
        original_code: "",
        product_category_id: 167,
        product_category_name: "Aparate foto Mirrorless",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 5664.38,
        ron_catalog_price: 5663.98,
        promo_price: 1140.08,
        ron_promo_price: 5664.38,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_be960f5bf738a472ab5d08b3184da7bb.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_be960f5bf738a472ab5d08b3184da7bb.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_c466a40cc94c963f2131c75093b5df57.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_c466a40cc94c963f2131c75093b5df57.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_fd7533842416473a8f93cdd97c231f4a.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_fd7533842416473a8f93cdd97c231f4a.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_f37dcdf5e74f6abd676350a9510f479f.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_f37dcdf5e74f6abd676350a9510f479f.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_22b23b4522739ea92aba602ed1f2f2cb.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_22b23b4522739ea92aba602ed1f2f2cb.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_dac0db87da8876db0b4823cb28cd126e.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_dac0db87da8876db0b4823cb28cd126e.JPG",
          },
        ],
        description:
          'Camera foto Canon Mirrorless EOS R10 kit + obiectiv RF-S 18-150mm F3.5- 6.3 IS STM , Black, sensor APS-C 24.2 MP,rezolutie sensor imagine: CMOS, 22,3 x 14,8 mm, Raport de aspect: 3:2, sistem curatare integrat, Procesor imagine Digic X, Montură obiectiv: RF, Distanţă focală: 1.6 X,  Focalizare: Dual Pixel CMOS AF II, Puncte focalizare: Cu zonă 100 % pe orizontală şi 100 % pe verticală (selectare automată) 90 % pe orizontală şi 100 % pe verticală (selectare manuală), Sensibilitate ISO: Auto 100 - 32000, se poate extinde la H:51200, vizor electronic OLED 0.39", 2.36mil puncte, 1024 x 768, LCD 2.95" 1.04 mil puncte, tactil, filmare MP4: 4K UHD, Full HD (16:9), 4K / Full HD: H.265 / HEVC, audio: AAC / PCM linear, 4K / Full HD: H.264 / MPEG-4 AVC, audio: AAC / PCM liniar, Rafala 15 CPS, WIFI, Bluetooth, Interfata: USB C SuperSpeed USB 3.2 Gen 2, mini HDMI, Stocare: SD/SDHC/SDXC şi UHS-II, Baterie Li-ion reîncărcabilă LP-E17 (inclusă), Cu LCD aprox. 430 de fotografii (la 23 °C), Cu vizor aprox. 260 de fotografii (la 23 °C), Încărcător de baterii LC-E17E (inclus).',
        long_description: null,
        ean: "8714574670522",
        recommended_product_ids: [],
      },
      {
        name: "CANON ZOEMINI S2 PHOTO+PRINTER TEAL",
        title:
          "Imprimanta foto Canon Zoemini S2, 2 in 1 camera foto + imprimanta foto, tehnologie ZINK (zero ink) Viteza: 50 secunde pe poza, Rezolutie printare 314 X 600 dpi, Camera 8 megapixeli, blitz integrat, Bluetooth, NFC, compatibilitate IOS si Android, format poze: JPG, slot microSD (max256gb), baterie",
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 24,
        warranty_type: "",
        min_quantity: 1,
        price: 122.47,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 122.44,
        discount: ".00",
        green_stamp_value: 0.15,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "0829d4a4ccba3342e4ebb9fc94e306e6",
        code: "4519C008AA",
        original_code: "",
        product_category_id: 762,
        product_category_name: "Imprimante termice",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 608.48,
        ron_catalog_price: 608.33,
        promo_price: 122.47,
        ron_promo_price: 608.48,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_21829a6312965f49eebc1c704d0fbc06.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_21829a6312965f49eebc1c704d0fbc06.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_3bc38e1c6fea3900ff5a993d916e6048.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_3bc38e1c6fea3900ff5a993d916e6048.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_21ed04f2374a19c8b81dcb398a1b8081.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_21ed04f2374a19c8b81dcb398a1b8081.JPG",
          },
        ],
        description:
          "Imprimanta foto Canon Zoemini S2, 2 in 1 camera foto + imprimanta foto, tehnologie ZINK (zero ink) Viteza: 50 secunde pe poza, Rezolutie printare 314 X 600 dpi, Camera 8 megapixeli, blitz integrat, Bluetooth, NFC, compatibilitate IOS si Android, format poze: JPG, slot microSD (max256gb), baterie 700mAh, durata baterie: 25 tipariri, dimensiuni: 121 x 80.3 x 22.4 mm, culoare: Teal, greutate: 188g, capacitate 10 coli 5.08 x 7.62 cm.",
        long_description: null,
        ean: "4549292176049",
        recommended_product_ids: [],
      },
      {
        name: "CANON ZOEMINI S2 PHOTO+PRINTER PEARL WH",
        title:
          "Imprimanta foto Canon Zoemini S2, 2 in 1 camera foto + imprimanta foto, tehnologie ZINK (zero ink) Viteza: 50 secunde pe poza, Rezolutie printare 314 X 600 dpi, Camera 8 megapixeli, blitz integrat, Bluetooth, NFC, compatibilitate IOS si Android, format poze: JPG, slot microSD (max256gb), baterie",
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 24,
        warranty_type: "",
        min_quantity: 1,
        price: 122.47,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 122.44,
        discount: ".00",
        green_stamp_value: 0.15,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "abaafb32b4f1f57eb0a8a4ab2b171a78",
        code: "4519C007AA",
        original_code: "",
        product_category_id: 762,
        product_category_name: "Imprimante termice",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 608.48,
        ron_catalog_price: 608.33,
        promo_price: 122.47,
        ron_promo_price: 608.48,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_13b18d68990c152b6c506f9b35db92ea.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_13b18d68990c152b6c506f9b35db92ea.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_ae77f7472aab49f3a2fa3c00f6225db0.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_ae77f7472aab49f3a2fa3c00f6225db0.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_88c75dcd16db1f054d5d74e06ab145ac.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_88c75dcd16db1f054d5d74e06ab145ac.JPG",
          },
        ],
        description:
          "Imprimanta foto Canon Zoemini S2, 2 in 1 camera foto + imprimanta foto, tehnologie ZINK (zero ink) Viteza: 50 secunde pe poza, Rezolutie printare 314 X 600 dpi, Camera 8 megapixeli, blitz integrat, Bluetooth, NFC, compatibilitate IOS si Android, format poze: JPG, slot microSD (max256gb), baterie 700mAh, durata baterie: 25 tipariri, dimensiuni: 121 x 80.3 x 22.4 mm, culoare: Pearl White, greutate: 188g, capacitate 10 coli 5.08 x 7.62 cm.",
        long_description: null,
        ean: "4549292176032",
        recommended_product_ids: [],
      },
      {
        name: "CANON ZOEMINI S2 PHOTO+PRINTER ROSE GOLD",
        title:
          "Imprimanta foto Canon Zoemini S2, 2 in 1 camera foto + imprimanta foto, tehnologie ZINK (zero ink) Viteza: 50 secunde pe poza, Rezolutie printare 314 X 600 dpi, Camera 8 megapixeli, blitz integrat, Bluetooth, NFC, compatibilitate IOS si Android, format poze: JPG, slot microSD (max256gb), baterie",
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 24,
        warranty_type: "",
        min_quantity: 1,
        price: 122.47,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 122.44,
        discount: ".00",
        green_stamp_value: 0.15,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "865e1471c203f9a590ab0858451060cf",
        code: "4519C006AA",
        original_code: "",
        product_category_id: 762,
        product_category_name: "Imprimante termice",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 608.48,
        ron_catalog_price: 608.33,
        promo_price: 122.47,
        ron_promo_price: 608.48,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_f225b025168846024d33cf67abd3e875.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_f225b025168846024d33cf67abd3e875.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_3793a25755f98f7b952206c12f247d5d.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_3793a25755f98f7b952206c12f247d5d.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_ee20c92b55ba01b9aaac6d1d8ffa7469.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_ee20c92b55ba01b9aaac6d1d8ffa7469.JPG",
          },
        ],
        description:
          "Imprimanta foto Canon Zoemini S2, 2 in 1 camera foto + imprimanta foto, tehnologie ZINK (zero ink) Viteza: 50 secunde pe poza, Rezolutie printare 314 X 600 dpi, Camera 8 megapixeli, blitz integrat, Bluetooth, NFC, compatibilitate IOS si Android, format poze: JPG, slot microSD (max256gb), baterie 700mAh, durata baterie: 25 tipariri, dimensiuni: 121 x 80.3 x 22.4 mm, culoare: Rose Gold, greutate: 188g, capacitate 10 coli 5.08 x 7.62 cm.",
        long_description: null,
        ean: "4549292176025",
        recommended_product_ids: [],
      },
      {
        name: "CANON EOS M50 MKII BK KIT M18-150 IS STM",
        title:
          'Camera foto Canon EOS M50 Mark II, Black KIT EF-M18-150 f/3.5-6.3 IS STM , 24.1 MP, DIGIC 8, ecran 3" LCD touchscreen, micro USB, Bluetooth, WI- FI, micro HDMI, 3.5mm jack microfon, Dual Pixel CMOS AF System, Rafala 10FPS, filmare 4K, APS-C sensor, greutate body 387g, carduri compatibile: SD, SDHC',
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 24,
        warranty_type: "",
        min_quantity: 1,
        price: 816.15,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 816.0,
        discount: ".00",
        green_stamp_value: 0.75,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "7c593c3dcc50bc73322fb9dc293453bf",
        code: "4728C044AA",
        original_code: "",
        product_category_id: 167,
        product_category_name: "Aparate foto Mirrorless",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 4054.96,
        ron_catalog_price: 4054.21,
        promo_price: 816.15,
        ron_promo_price: 4054.96,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_d5391064b3c7b4a3d8e9643fa023901c.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_d5391064b3c7b4a3d8e9643fa023901c.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_6b0e11e9a78c55a251af8d24d0ba1ee0.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_6b0e11e9a78c55a251af8d24d0ba1ee0.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_55ba4fbe54a58d6f9a03c474e9c758c0.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_55ba4fbe54a58d6f9a03c474e9c758c0.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_35ca941c65fe32d5123fc34d10cc45d6.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_35ca941c65fe32d5123fc34d10cc45d6.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_cfc15118a6a486dff27ee18b4cb9ad04.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_cfc15118a6a486dff27ee18b4cb9ad04.JPG",
          },
        ],
        description:
          'Camera foto Canon EOS M50 Mark II, Black KIT EF-M18-150 f/3.5-6.3 IS STM , 24.1 MP, DIGIC 8, ecran 3" LCD touchscreen, micro USB, Bluetooth, WI- FI, micro HDMI, 3.5mm jack microfon, Dual Pixel CMOS AF System, Rafala 10FPS, filmare 4K, APS-C sensor, greutate body 387g, carduri compatibile: SD, SDHC, SDXC (UHS-I compatible), baterie LP-E12, obiective compatibile: EF-M.',
        long_description: null,
        ean: "8714574668048",
        recommended_product_ids: [],
      },
      {
        name: "PHOTO CAMERA CANON EOS R3 BODY",
        title:
          "Camera foto Canon Mirrorless EOS R3 body, Black, sensor full frame 24.1 MP,rezolutie sensor imagine: CMOS, 36 x 24 mm, Raport de aspect: 3:2, sistem curatare integrat, Procesor imagine Digic X, Montură obiectiv: RF, Distanţă focală: 1.0X,  Focalizare: Dual Pixel CMOS AF II, Puncte focalizare: Cu",
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 12,
        warranty_type: "",
        min_quantity: 1,
        price: 4995.15,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 4995.0,
        discount: ".00",
        green_stamp_value: 0.75,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "46e607f0f6753515aecb3998248efa73",
        code: "4895C014AA",
        original_code: "",
        product_category_id: 167,
        product_category_name: "Aparate foto Mirrorless",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 24817.91,
        ron_catalog_price: 24817.16,
        promo_price: 4995.15,
        ron_promo_price: 24817.91,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_19a40acc7ae38b2586cef05a99978ff5.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_19a40acc7ae38b2586cef05a99978ff5.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_bbb49ff028f486cd120f0740fd550cc0.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_bbb49ff028f486cd120f0740fd550cc0.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_6a51a180c928d52f134f60faa23f98b1.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_6a51a180c928d52f134f60faa23f98b1.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_58952bb3d1f728a81ab6a7d4cee07132.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_58952bb3d1f728a81ab6a7d4cee07132.JPG",
          },
        ],
        description:
          'Camera foto Canon Mirrorless EOS R3 body, Black, sensor full frame 24.1 MP,rezolutie sensor imagine: CMOS, 36 x 24 mm, Raport de aspect: 3:2, sistem curatare integrat, Procesor imagine Digic X, Montură obiectiv: RF, Distanţă focală: 1.0X,  Focalizare: Dual Pixel CMOS AF II, Puncte focalizare: Cu zonă 100 % pe orizontală şi 100 % pe verticală (selectare automată), Sensibilitate ISO: Automată 100-102.400, se poate extinde la L:50, H1:204800, vizor electronic OLED 0.5", 5.7mil puncta, 1600x1200, LCD 3.2" 4.15 mil puncta, tactil, filmare: MP4: 4K DCI/UHD (17:9 / 16:9), Full HD (16:9), 6K RAW: CRM pe 12 biţi Audio: PCM linear, Rafala 30 CPS, Stabilizare a imaginii incorporate, echivalentă cu până la 8 stopuri, WIFI, Bluetooth, Interfata: USB C SuperSpeed USB 3.2 Gen 2, mini HDMI, Stocare: 1x CFexpress tip B, 1x SD/SDHC/SDXC şi UHS-II, Baterie Li-ion reîncărcabilă LP-E19 (inclusă), Cu LCD aprox. 860 de fotografii (la 23 °C), Cu vizor aprox. 620 de fotografii (la 23 °C), Încărcător de baterii LC-E19E (inclus).',
        long_description: null,
        ean: "8714574669335",
        recommended_product_ids: [],
      },
      {
        name: "CANON EOS M50 MKII BK KIT M15-45 IS STM",
        title:
          'Camera foto Canon EOS M50 Mark II, Black KIT EF-M15-45 IS STM, 24.1 MP, DIGIC 8, ecran 3" LCD touchscreen, micro USB, Bluetooth, WI-FI, micro HDMI, 3.5mm jack microfon, Dual Pixel CMOS AF System, Rafala 10FPS, filmare 4K, APS-C sensor, greutate body 387g, carduri compatibile: SD, SDHC, SDXC (UHS-I',
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 24,
        warranty_type: "",
        min_quantity: 1,
        price: 607.15,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 607.0,
        discount: ".00",
        green_stamp_value: 0.75,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "94ee48720f2febf5f32da684052d4fa3",
        code: "4728C043AA",
        original_code: "",
        product_category_id: 167,
        product_category_name: "Aparate foto Mirrorless",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 3016.57,
        ron_catalog_price: 3015.82,
        promo_price: 607.15,
        ron_promo_price: 3016.57,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_53621739e15e5510f1ff9ee07f779cd1.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_53621739e15e5510f1ff9ee07f779cd1.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_5d639859a7d0848e192f97d6331fb786.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_5d639859a7d0848e192f97d6331fb786.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_0d762eb667787ee6d89d630ffc44e966.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_0d762eb667787ee6d89d630ffc44e966.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_4c18688e6bf5b29c70aee6369a491d06.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_4c18688e6bf5b29c70aee6369a491d06.JPG",
          },
        ],
        description:
          'Camera foto Canon EOS M50 Mark II, Black KIT EF-M15-45 IS STM, 24.1 MP, DIGIC 8, ecran 3" LCD touchscreen, micro USB, Bluetooth, WI-FI, micro HDMI, 3.5mm jack microfon, Dual Pixel CMOS AF System, Rafala 10FPS, filmare 4K, APS-C sensor, greutate body 387g, carduri compatibile: SD, SDHC, SDXC (UHS-I compatible), baterie LP-E12, obiective compatibile: EF-M.',
        long_description: null,
        ean: "8714574668031",
        recommended_product_ids: [],
      },
      {
        name: "PHOTO CAMERA CANON G7X MARK III+NB-13L",
        title:
          'Camera foto Canon PowerShot G7x MARK III + acumulator NB-13L, 20.1Mpx, sensor CMOS, procesor DICIC 8, zoom optic 4.2x, stabilizare optica, autofocus, macro 5cm, touchscreen 3" rabatabil, face detection, video (4K) 3840 x 2160, 29.97 / 25fps, (Full HD) 1920 x 1080, , 119.9 / 100 / 59.94 / 50 / 29.97',
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 24,
        warranty_type: "",
        min_quantity: 1,
        price: 687.08,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 687.0,
        discount: ".00",
        green_stamp_value: 0.4,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "cb06043498a1628f700ed5f6d3ee80f4",
        code: "3637C016AA",
        original_code: "",
        product_category_id: 165,
        product_category_name: "Aparate foto compacte",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 3413.69,
        ron_catalog_price: 3413.29,
        promo_price: 687.08,
        ron_promo_price: 3413.69,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_b5ede8bcb8cbdd0594fcd6a5b9a9bb35.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_b5ede8bcb8cbdd0594fcd6a5b9a9bb35.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_790ce5e810520c18c806f870b661f98e.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_790ce5e810520c18c806f870b661f98e.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_3dd3a0525957ec80078c5a332b2aea93.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_3dd3a0525957ec80078c5a332b2aea93.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_9a6a40dd45a81b3c76192574b6ecc4f3.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_9a6a40dd45a81b3c76192574b6ecc4f3.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_eddf4db86451245c0184c45e2e549d9b.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_eddf4db86451245c0184c45e2e549d9b.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_a5645c218c98a991d3a11043862541c4.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_a5645c218c98a991d3a11043862541c4.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_5dcf06728b9edc18fa3fdfc9c233f9e2.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_5dcf06728b9edc18fa3fdfc9c233f9e2.JPG",
          },
        ],
        description:
          'Camera foto Canon PowerShot G7x MARK III + acumulator NB-13L, 20.1Mpx, sensor CMOS, procesor DICIC 8, zoom optic 4.2x, stabilizare optica, autofocus, macro 5cm, touchscreen 3" rabatabil, face detection, video (4K) 3840 x 2160, 29.97 / 25fps, (Full HD) 1920 x 1080, , 119.9 / 100 / 59.94 / 50 / 29.97 / 25 fps, HDMI type D, USB, Wi-Fi, card SD, SDHC, SDXC, baterie NB-13L, culoare negru.',
        long_description: null,
        ean: "8714574664040",
        recommended_product_ids: [],
      },
      {
        name: "PHOTO CAMERA CANON EOS RP BODY",
        title:
          'Camera foto Canon DSC EOS RP body , Black, sensor full frame 26.2 MP,rezolutie filmare 4K, LCD tactil 3" de 1.04 milioane de puncte,DIGIC8,Dual Pixel CMOS AF,  Vizor electronic de 2.36m-Dot, 4779 puncte AF, ISO 50-40000, USB type-C, Wi-Fi , Bluetooth, card compatibil: 1x SD/SDHC/SDXC şi UHS-I',
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 24,
        warranty_type: "",
        min_quantity: 1,
        price: 915.08,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 915.0,
        discount: ".00",
        green_stamp_value: 0.4,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "2179818fbca7459a608f45fc1ec37012",
        code: "3380C193AA",
        original_code: "",
        product_category_id: 167,
        product_category_name: "Aparate foto Mirrorless",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 4546.49,
        ron_catalog_price: 4546.09,
        promo_price: 915.08,
        ron_promo_price: 4546.49,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_f03734374edd134b2657be9321dc3be9.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_f03734374edd134b2657be9321dc3be9.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_d76cceb4bac0ad306d936cc1b2d83c8c.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_d76cceb4bac0ad306d936cc1b2d83c8c.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_2f3fa03b6d6b0c7d7b65d330899aff4c.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_2f3fa03b6d6b0c7d7b65d330899aff4c.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_012dc5d09513dc646f43b3ce3476e3a6.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_012dc5d09513dc646f43b3ce3476e3a6.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_6b0727ae417480a08aeb55f4ad50a6b1.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_6b0727ae417480a08aeb55f4ad50a6b1.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_248d93f9f0474b4a58ce4f098b360215.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_248d93f9f0474b4a58ce4f098b360215.JPG",
          },
        ],
        description:
          'Camera foto Canon DSC EOS RP body , Black, sensor full frame 26.2 MP,rezolutie filmare 4K, LCD tactil 3" de 1.04 milioane de puncte,DIGIC8,Dual Pixel CMOS AF,  Vizor electronic de 2.36m-Dot, 4779 puncte AF, ISO 50-40000, USB type-C, Wi-Fi , Bluetooth, card compatibil: 1x SD/SDHC/SDXC şi UHS-I, accumulator Li-ion LP-E17, greutate 440 g (body).',
        long_description: null,
        ean: "8714574668062",
        recommended_product_ids: [],
      },
      {
        name: "PHOTO CAMERA CANON EOS R6 BODY",
        title:
          'Camera foto Canon Mirrorless EOS R6 body, Black, sensor full frame 20 MP,rezolutie filmare 4K, LCD tactil 3",DIGIC X, stabilizator de imagine 8 srops incorporat, autofocus-corp, fata, ochi, animale, Dual Pixel CMOS AF II, rafala 12 fps, vizor electronic tip 0.5-Dot OLED, 3.69 mil puncte, ISO',
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 12,
        warranty_type: "",
        min_quantity: 1,
        price: 2080.15,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 2080.0,
        discount: ".00",
        green_stamp_value: 0.75,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "43e8db3b333f749cc36601b8332807cb",
        code: "4082C044AA",
        original_code: "",
        product_category_id: 167,
        product_category_name: "Aparate foto Mirrorless",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 10335.02,
        ron_catalog_price: 10334.27,
        promo_price: 2080.15,
        ron_promo_price: 10335.02,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_074330f874598897d7a95c322281516f.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_074330f874598897d7a95c322281516f.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_ddf3f8d7a8ab549cd247f22c32e7533d.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_ddf3f8d7a8ab549cd247f22c32e7533d.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_d183eb2f838d2686a6a916d07c091e33.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_d183eb2f838d2686a6a916d07c091e33.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_0cc6c8aa8484366592dbd58f3f878b80.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_0cc6c8aa8484366592dbd58f3f878b80.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_150d8c9c6cd24c1cb7a7602934786e06.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_150d8c9c6cd24c1cb7a7602934786e06.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_35a22d9779fb06c98da9d62f043b0577.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_35a22d9779fb06c98da9d62f043b0577.JPG",
          },
        ],
        description:
          'Camera foto Canon Mirrorless EOS R6 body, Black, sensor full frame 20 MP,rezolutie filmare 4K, LCD tactil 3",DIGIC X, stabilizator de imagine 8 srops incorporat, autofocus-corp, fata, ochi, animale, Dual Pixel CMOS AF II, rafala 12 fps, vizor electronic tip 0.5-Dot OLED, 3.69 mil puncte, ISO 100-6400, , Wi-Fi , Bluetooth, incarcare USB 2x SD/SDHC/SDXC, UHS-II accumulator Li-ion LP-E6N , greutate 598g (body+baterie+SD).',
        long_description: null,
        ean: "8714574666099",
        recommended_product_ids: [],
      },
      {
        name: "PHOTO CAMERA CANON EOS RP+RF24-105F4-7.1",
        title:
          'Camera foto Canon mirrorless DSC EOS RP KIT Obiectiv Canon RF 24-105mm F4-7.1 IS STM, Black, sensor full frame 26.2 MP,rezolutie filmare 4K, LCD tactil 3" de 1.04 milioane de puncte,DIGIC8,Dual Pixel CMOS AF,  Vizor electronic de 2.36m-Dot, 4779 puncte AF, ISO 50-40000, USB type-C, Wi-Fi',
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 24,
        warranty_type: "",
        min_quantity: 1,
        price: 1164.08,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 1164.0,
        discount: ".00",
        green_stamp_value: 0.4,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "0e3ed2c78d1e28509741f91fd1abb823",
        code: "3380C154AA",
        original_code: "",
        product_category_id: 167,
        product_category_name: "Aparate foto Mirrorless",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 5783.62,
        ron_catalog_price: 5783.22,
        promo_price: 1164.08,
        ron_promo_price: 5783.62,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_f579678fa2ad6e66a058ba9a180e9b40.jpg",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_f579678fa2ad6e66a058ba9a180e9b40.jpg",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_0a8da280eaed0279976c89b37527a88e.jpg",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_0a8da280eaed0279976c89b37527a88e.jpg",
          },
        ],
        description:
          'Camera foto Canon mirrorless DSC EOS RP KIT Obiectiv Canon RF 24-105mm F4-7.1 IS STM, Black, sensor full frame 26.2 MP,rezolutie filmare 4K, LCD tactil 3" de 1.04 milioane de puncte,DIGIC8,Dual Pixel CMOS AF,  Vizor electronic de 2.36m-Dot, 4779 puncte AF, ISO 50-40000, USB type-C, Wi-Fi , Bluetooth, card compatibil: 1x SD/SDHC/SDXC şi UHS-I, accumulator Li-ion LP-E17, greutate 440 g (body).',
        long_description: null,
        ean: "8714574665498",
        recommended_product_ids: [],
      },
      {
        name: "PHOTO CAMERA CANON EOS R5 BODY",
        title:
          'Camera foto Canon Mirrorless EOS R5 body, Black, sensor full frame 45.0 MP,rezolutie filmare 8K 30FPS, LCD tactil 3.15",DIGIC X, stabilizator de imagine pe 5 axe incorporate, autofocus-corp, fata, ochi, animale, Dual Pixel CMOS AF II, rafala 20 cps, vizor electronic tip 0.5-Dot OLED, 5.76 mil',
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 12,
        warranty_type: "",
        min_quantity: 1,
        price: 3746.15,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 3746.0,
        discount: ".00",
        green_stamp_value: 0.75,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "8a64bdb1fa99497f56306042325035d6",
        code: "4147C027AA",
        original_code: "",
        product_category_id: 167,
        product_category_name: "Aparate foto Mirrorless",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 18612.38,
        ron_catalog_price: 18611.63,
        promo_price: 3746.15,
        ron_promo_price: 18612.38,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_4e6afe0a8e5af08d21d646595776e40c.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_4e6afe0a8e5af08d21d646595776e40c.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_2ddccff81e97ffd80fc6ef37e27c799a.jpg",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_2ddccff81e97ffd80fc6ef37e27c799a.jpg",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_2c6bb427a54108ba2fef13e9ea5b35ae.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_2c6bb427a54108ba2fef13e9ea5b35ae.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_77d6029cf9f072c7c28bc27e608ac72e.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_77d6029cf9f072c7c28bc27e608ac72e.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_3bbc330306f7facdcd3196af09b79b09.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_3bbc330306f7facdcd3196af09b79b09.JPG",
          },
        ],
        description:
          'Camera foto Canon Mirrorless EOS R5 body, Black, sensor full frame 45.0 MP,rezolutie filmare 8K 30FPS, LCD tactil 3.15",DIGIC X, stabilizator de imagine pe 5 axe incorporate, autofocus-corp, fata, ochi, animale, Dual Pixel CMOS AF II, rafala 20 cps, vizor electronic tip 0.5-Dot OLED, 5.76 mil puncte, ISO 100-51200, , Wi-Fi , Bluetooth, incarcare USB 1 x CFexpresss , 1x SD UHS-II accumulator Li-ion LP-E6NH , greutate 738g (body+baterie+SD).',
        long_description: null,
        ean: "4549292161212",
        recommended_product_ids: [],
      },
      {
        name: "CAMERA FOTO EOS M200 BK KIT 15-45+55-200",
        title:
          'Camera foto mirrorless Canon EOS M200 dublu kit EF-M 15-45mm f/3.5-6.3 IS STM + EF-M 55-200mm F4.5-6.3 IS STM Negru, senzor APS-C 24.1 MP, crop factor 1.6x, procesor DIGIC 8, touchscreen 3" LCD rabatabil, WiFi,micro USB, Bluetooth,ISO 100-25600, filmare 4K - 3840 x 2160 (23.98, 25 fps), Full HD -',
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 24,
        warranty_type: "",
        min_quantity: 1,
        price: 670.08,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 670.0,
        discount: ".00",
        green_stamp_value: 0.4,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "74e085b9dc93a09539daf768116932e5",
        code: "3699C030AA",
        original_code: "",
        product_category_id: 167,
        product_category_name: "Aparate foto Mirrorless",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 3329.23,
        ron_catalog_price: 3328.83,
        promo_price: 670.08,
        ron_promo_price: 3329.23,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_6d5599ecadf08e419e290555fb304568.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_6d5599ecadf08e419e290555fb304568.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_07779cee9e63238621b99f69999a9373.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_07779cee9e63238621b99f69999a9373.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_406bc4eb8f32166716273067e573a009.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_406bc4eb8f32166716273067e573a009.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_704f19bec763888690c3aa47cd286c83.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_704f19bec763888690c3aa47cd286c83.JPG",
          },
        ],
        description:
          'Camera foto mirrorless Canon EOS M200 dublu kit EF-M 15-45mm f/3.5-6.3 IS STM + EF-M 55-200mm F4.5-6.3 IS STM Negru, senzor APS-C 24.1 MP, crop factor 1.6x, procesor DIGIC 8, touchscreen 3" LCD rabatabil, WiFi,micro USB, Bluetooth,ISO 100-25600, filmare 4K - 3840 x 2160 (23.98, 25 fps), Full HD - 1920 x 1080 (59.94, 50, 29.97, 25fps), Dual Pixel CMOS AF, compatibilSD/SDHC/SDXC, HDMI micro, acumulator li-ion LP-E12, greutate 299 g.',
        long_description: null,
        ean: "8714574664484",
        recommended_product_ids: [],
      },
      {
        name: "PHOTO CAMERA CANON 250D+18-55 DCIII KIT",
        title:
          'Camera foto Canon DSLR EOS 250D + 18-55 DC III kit, Black, 24.1MP, Dual Pixel CMOS, LCD 3" rabatabil, DIGIC 8, ISO Auto (100-25600), filmare 4K 25 fps, Full HD 50fps,compatibil SD, SDHC, SDXC (UHS Speed Class 1 compatible) Interfata: HDMI mini,WI-FI, Bluetooth, acumulator Li-ion LP-E17, Culoare',
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 24,
        warranty_type: "",
        min_quantity: 1,
        price: 623.08,
        special_price: 1,
        special_price_valid_to: "2024-12-31",
        catalog_price: 640.3,
        discount: ".00",
        green_stamp_value: 0.4,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "e56f9d247ee34ca52dfeeaa35b7309a4",
        code: "3454C009AA",
        original_code: "",
        product_category_id: 166,
        product_category_name: "Aparate foto DSLR",
        stock_value: 2,
        reserved_stock_value: 0,
        supplier_stock_value: 4,
        supplier_stock_delivery_date: "2024-12-02 00:00:00.000000",
        ron_price: 3095.71,
        ron_catalog_price: 3181.27,
        promo_price: 623.08,
        ron_promo_price: 3095.71,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_0c2f09b110685654110efb2a79ade38c.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_0c2f09b110685654110efb2a79ade38c.JPG",
          },
        ],
        description:
          'Camera foto Canon DSLR EOS 250D + 18-55 DC III kit, Black, 24.1MP, Dual Pixel CMOS, LCD 3" rabatabil, DIGIC 8, ISO Auto (100-25600), filmare 4K 25 fps, Full HD 50fps,compatibil SD, SDHC, SDXC (UHS Speed Class 1 compatible) Interfata: HDMI mini,WI-FI, Bluetooth, acumulator Li-ion LP-E17, Culoare Negru, Montura: Canon EF si EF-S, Dimensiuni: 122.4 x 92.6 x 69.8mm, greutate: 450g.',
        long_description: null,
        ean: "8714574661216",
        recommended_product_ids: [],
      },
      {
        name: "PHOTO CAMERA CANON G7X MARK III",
        title:
          'Camera foto Canon PowerShot G7x MARK III, 20.1Mpx, sensor CMOS, procesor DICIC 8, zoom optic 4.2x, stabilizare optica, autofocus, macro 5cm, touchscreen 3" rabatabil, face detection, video (4K) 3840 x 2160, 29.97 / 25fps, (Full HD) 1920 x 1080, , 119.9 / 100 / 59.94 / 50 / 29.97 / 25 fps, HDMI type',
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 24,
        warranty_type: "",
        min_quantity: 1,
        price: 669.08,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 669.0,
        discount: ".00",
        green_stamp_value: 0.4,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "c1a5ac8f7bd35d14796bf458c4fd7c05",
        code: "3637C013AA",
        original_code: "",
        product_category_id: 165,
        product_category_name: "Aparate foto compacte",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 3324.26,
        ron_catalog_price: 3323.86,
        promo_price: 669.08,
        ron_promo_price: 3324.26,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_e3f0c9e1c4f1a0910c594f466731de95.jpg",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_e3f0c9e1c4f1a0910c594f466731de95.jpg",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_c20948d4fabca418468469c11910aabf.jpg",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_c20948d4fabca418468469c11910aabf.jpg",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_4e34cf3e41eb89aef06a5e8afede379d.jpg",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_4e34cf3e41eb89aef06a5e8afede379d.jpg",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_0e036bd4f5b7d2fb3717f5936efde21e.jpg",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_0e036bd4f5b7d2fb3717f5936efde21e.jpg",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_3c132aba507f6f4a0b72153495b95e84.jpg",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_3c132aba507f6f4a0b72153495b95e84.jpg",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_5c6b9475200c262463b1fe0d6c5049de.jpg",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_5c6b9475200c262463b1fe0d6c5049de.jpg",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_1eb10e8a4295069d6a2206ee28aa2023.jpg",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_1eb10e8a4295069d6a2206ee28aa2023.jpg",
          },
        ],
        description:
          'Camera foto Canon PowerShot G7x MARK III, 20.1Mpx, sensor CMOS, procesor DICIC 8, zoom optic 4.2x, stabilizare optica, autofocus, macro 5cm, touchscreen 3" rabatabil, face detection, video (4K) 3840 x 2160, 29.97 / 25fps, (Full HD) 1920 x 1080, , 119.9 / 100 / 59.94 / 50 / 29.97 / 25 fps, HDMI type D, USB, Wi-Fi, card SD, SDHC, SDXC, baterie NB-13L, culoare negru.',
        long_description: null,
        ean: "8714574659138",
        recommended_product_ids: [],
      },
      {
        name: "PHOTO CAMERA CANON EOS 90D KIT 18-135 IS",
        title:
          'Camera foto Canon EOS 90D + obiectiv Canon EFS 18-135mm f3.5-5.6 IS USM, Senzor APS-C CMOS de 32,5 megapixel, Ecran tactil TFT Clear View II, cu unghi variabil de 7,7 cm (3,0") 3:2, aprox. 1.040 mii puncte, Procesor DIGIC 8, Rafala: 10 cadre pe secunda, Sensibilitate ISO 100-25600, Filmare 4K-3840 x',
        manufacturer_id: "613dc84eceb80cb2c1887b2dc915e82d",
        manufacturer_name: "CANON",
        warranty: 24,
        warranty_type: "",
        min_quantity: 1,
        price: 1313.21,
        special_price: 0,
        special_price_valid_to: null,
        catalog_price: 1313.06,
        discount: ".00",
        green_stamp_value: 0.75,
        currency: "EUR",
        has_resealed: 0,
        vat_percent: 19.0,
        id: "f8df49fd7a6260d19e4a55c3acc1e3a4",
        code: "3616C029AA",
        original_code: "",
        product_category_id: 166,
        product_category_name: "Aparate foto DSLR",
        stock_value: 0,
        reserved_stock_value: 0,
        supplier_stock_value: 0,
        supplier_stock_delivery_date: null,
        ron_price: 6524.56,
        ron_catalog_price: 6523.81,
        promo_price: 1313.21,
        ron_promo_price: 6524.56,
        promotions: [],
        pictures: [
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_98ad34c2ea1165f8c98dffc19b386200.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_98ad34c2ea1165f8c98dffc19b386200.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_26f969253ca48b2efaa78d05c00c7635.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_26f969253ca48b2efaa78d05c00c7635.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_86d8ae4e42064f6f5a024882913f3ecb.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_86d8ae4e42064f6f5a024882913f3ecb.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_add808b9721f0fb211927808d5df49d0.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_add808b9721f0fb211927808d5df49d0.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_55ec61bc631c85d2810ac0871a000064.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_55ec61bc631c85d2810ac0871a000064.JPG",
          },
          {
            url_overlay_picture:
              "https://cdn.b2b.nod.ro/images/overlay_1f2b3f4ef0da92a0ed48c0bf221c4de7.JPG",
            url_thumbnail_picture:
              "https://cdn.b2b.nod.ro/images/thumbnail_1f2b3f4ef0da92a0ed48c0bf221c4de7.JPG",
          },
        ],
        description:
          'Camera foto Canon EOS 90D + obiectiv Canon EFS 18-135mm f3.5-5.6 IS USM, Senzor APS-C CMOS de 32,5 megapixel, Ecran tactil TFT Clear View II, cu unghi variabil de 7,7 cm (3,0") 3:2, aprox. 1.040 mii puncte, Procesor DIGIC 8, Rafala: 10 cadre pe secunda, Sensibilitate ISO 100-25600, Filmare 4K-3840 x 2160 (30 fps), 45 de puncte AF, WIFI, Bluetooth, Montura Canon EF/EF-S, compatibil, Carduri compatibile:SD, SDHC, SDXC (compatibil UHS-II), HDMI, USB Micro-B, acumulator Li-ion LP-E6N, dimensiuni 140.7 x 104.8 x 76.8 mm, greutate 701g.',
        long_description: null,
        ean: "8714574663364",
        recommended_product_ids: [],
      },
    ],
  };
};

export const fetchProductById = async (productId: string) => {
  const response = await axiosInstance.get(`/products/${productId}`);
  return response.data;
};

export const createProduct = async (productData: any) => {
  const response = await axiosInstance.post("/products", productData);
  return response.data;
};

export const updateProduct = async (productId: string, productData: any) => {
  const response = await axiosInstance.put(
    `/products/${productId}`,
    productData
  );
  return response.data;
};

export const deleteProduct = async (productId: string) => {
  const response = await axiosInstance.delete(`/products/${productId}`);
  return response.data;
};
