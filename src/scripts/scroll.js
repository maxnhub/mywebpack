window.addEventListener('DOMContentLoaded', function() {
  let controller = new ScrollMagic.Controller();

  let sceneSportTitle = new ScrollMagic.Scene({
        triggerElement: '.sport__title'
    })
    .setClassToggle('.sport__title', 'sport__title--show')
    .reverse(false)
    .addTo(controller);


  let sceneSportSubtitle = new ScrollMagic.Scene({
      triggerElement: '.sport__title'
    })
    .setClassToggle('.sport__subtitle', 'sport__subtitle--show')
    .reverse(false)
    .addTo(controller);

  let sceneSportSubtext= new ScrollMagic.Scene({
      triggerElement: '.sport__subtext'
    })
    .setClassToggle('.sport__subtext', 'sport__subtext--show')
    .reverse(false)
    .addTo(controller);

  let sceneSportLink = new ScrollMagic.Scene({
      triggerElement: '.sport__link'
    })
    .setClassToggle('.sport__link', 'sport__link--show')
    .reverse(false)
    .addTo(controller);

  let sceneSportPic = new ScrollMagic.Scene({
      triggerElement: '.sport__pic'
    })
    .setClassToggle('.sport__pic', 'sport__pic--show')
    .reverse(false)
    .addTo(controller);
  
  let sceneSystemTitle = new ScrollMagic.Scene({
          triggerElement: '.system__title'
      })
      .setClassToggle('.system__title', 'system__title--show')
      .reverse(false)
      .addTo(controller);

  let sceneSystemText = new ScrollMagic.Scene({
          triggerElement: '.system__text'
      })
      .setClassToggle('.system__text', 'system__text--show')
      .reverse(false)
      .addTo(controller);


  let sceneSystemLink = new ScrollMagic.Scene({
        triggerElement: '.system__link'
    })
    .setClassToggle('.system__link', 'system__link--show')
    .reverse(false)
    .addTo(controller);

  let sceneSystemPic1= new ScrollMagic.Scene({
        triggerElement: '.system__title'
    })
    .setClassToggle('.system__pic--1', 'system__pic--1--show')
    .reverse(false)
    .addTo(controller);

  let sceneSystemPic2 = new ScrollMagic.Scene({
        triggerElement: '.system__pic--2'
    })
    .setClassToggle('.system__pic--2', 'system__pic--2--show')
    .reverse(false)
    .addTo(controller);

  let sceneSystemPic3 = new ScrollMagic.Scene({
      triggerElement: '.system__pic--3'
    })
    .setClassToggle('.system__pic--3', 'system__pic--3--show')
    .reverse(false)
    .addTo(controller);

  let sceneSpaDesc = new ScrollMagic.Scene({
      triggerElement: '.spa__desc'
    })
    .setClassToggle('.spa__desc', 'spa__desc--show')
    .reverse(false)
    .addTo(controller);

    let sceneMobilePic = new ScrollMagic.Scene({
        triggerElement: '.mobile__pic'
      })
      .setClassToggle('.mobile__pic', 'mobile__pic--show')
      .reverse(false)
      .addTo(controller);

    let sceneMobileTitle = new ScrollMagic.Scene({
        triggerElement: '.mobile__title'
      })
      .setClassToggle('.mobile__title', 'mobile__title--show')
      .reverse(false)
      .addTo(controller);

    let sceneMobileSubtext = new ScrollMagic.Scene({
        triggerElement: '.mobile__subtext'
      })
      .setClassToggle('.mobile__subtext', 'mobile__subtext--show')
      .reverse(false)
      .addTo(controller);

    let sceneMobileLink = new ScrollMagic.Scene({
        triggerElement: '.mobile__link'
      })
      .setClassToggle('.mobile__link', 'mobile__link--show')
      .reverse(false)
      .addTo(controller);

    let sceneVebinarsTitle = new ScrollMagic.Scene({
        triggerElement: '.vebinars__dark-title'
      })
      .setClassToggle('.vebinars__dark-title', 'vebinars__dark-title--show')
      .reverse(false)
      .addTo(controller);

    let sceneVebinarsSubtext = new ScrollMagic.Scene({
        triggerElement: '.vebinars__dark-subtext'
      })
      .setClassToggle('.vebinars__dark-subtext', 'vebinars__dark-subtext--show')
      .reverse(false)
      .addTo(controller);

    let sceneVebinarsPic1 = new ScrollMagic.Scene({
        triggerElement: '.vebinars__pic--1'
      })
      .setClassToggle('.vebinars__pic--1', 'vebinars__pic--1--show')
      .reverse(false)
      .addTo(controller);

    let sceneVebinarsPic2 = new ScrollMagic.Scene({
        triggerElement: '.vebinars__pic--2'
      })
      .setClassToggle('.vebinars__pic--2', 'vebinars__pic--2--show')
      .reverse(false)
      .addTo(controller);

    let sceneVebinarsPic3 = new ScrollMagic.Scene({
        triggerElement: '.vebinars__pic--3'
      })
      .setClassToggle('.vebinars__pic--3', 'vebinars__pic--3--show')
      .reverse(false)
      .addTo(controller);

    let sceneVebinarsPic4 = new ScrollMagic.Scene({
        triggerElement: '.vebinars__pic--4'
      })
      .setClassToggle('.vebinars__pic--4', 'vebinars__pic--4--show')
      .reverse(false)
      .addTo(controller);

    let sceneVebinarsPic5 = new ScrollMagic.Scene({
        triggerElement: '.vebinars__pic--5'
      })
      .setClassToggle('.vebinars__pic--5', 'vebinars__pic--5--show')
      .reverse(false)
      .addTo(controller);

    let sceneVebinarsPic6 = new ScrollMagic.Scene({
        triggerElement: '.vebinars__pic--6'
      })
      .setClassToggle('.vebinars__pic--6', 'vebinars__pic--6--show')
      .reverse(false)
      .addTo(controller);

    let sceneDreamTitle= new ScrollMagic.Scene({
        triggerElement: '.dream__title'
      })
      .setClassToggle('.dream__title', 'dream__title--show')
      .reverse(false)
      .addTo(controller);

    let sceneDreamSubtext = new ScrollMagic.Scene({
        triggerElement: '.dream__subtext'
      })
      .setClassToggle('.dream__subtext', 'dream__subtext--show')
      .reverse(false)
      .addTo(controller);

    let sceneDreamlink = new ScrollMagic.Scene({
        triggerElement: '.dream__link'
      })
      .setClassToggle('.dream__link', 'dream__link--show')
      .reverse(false)
      .addTo(controller);

    let sceneOneclickTitle = new ScrollMagic.Scene({
        triggerElement: '.oneclick__title'
      })
      .setClassToggle('.oneclick__title', 'oneclick__title--show')
      .reverse(false)
      .addTo(controller);

    let sceneOneclickSubtext = new ScrollMagic.Scene({
        triggerElement: '.oneclick__subtext'
      })
      .setClassToggle('.oneclick__subtext', 'oneclick__subtext--show')
      .reverse(false)
      .addTo(controller);

    let sceneOneclickLink = new ScrollMagic.Scene({
        triggerElement: '.oneclick__link'
      })
      .setClassToggle('.oneclick__link', 'oneclick__link--show')
      .reverse(false)
      .addTo(controller);
});