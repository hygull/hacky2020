function getNotificationsButtonsText() {
    let buttonTexts = new Array() // Output array
    ntCards = $(".nt-segment").children

    for(let ntCard of ntCards) {
        button = $("button.message-anywhere-button", ntCard)
        span = $("span", ntCard)

        if(button && span)
            buttonTexts.push($("span", button).innerText)
    }

    return buttonTexts
}


var buttonTexts = getNotificationsButtonsText()
console.log(buttonTexts) // ["Say congrats", "Say congrats", ...]

/****** One ntCard ******/

/*
<div id="ember1504" class="nt-card__occlusion-wrapper ember-view">                <article id="ember1530" class="nt-card nt-card--in-segment ember-view"><div class="nt-card__main display-flex flex-row">
  <div class="nt-card__left-rail">
      <a href="/in/sarika%2Dshubhanu%2Da83b95114" aria-label="View Sarika Shubhanu’s profile" data-ember-action="" data-ember-action-1531="1531">
        <div id="ember1532" class="nt-primary-entity ivm-image-view-model ember-view">  <div id="ember1533" class="display-flex ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag ember-view"><!---->    <div id="ember1534" class="presence-entity presence-entity--size-4 ember-view"><img title="Sarika Shubhanu" alt="Sarika Shubhanu" id="ember1535" class="ivm-view-attr__img--centered EntityPhoto-circle-4  presence-entity__image EntityPhoto-circle-4 lazy-image loaded ember-view" src="https://media.licdn.com/dms/image/C5603AQHBwefXu4kQtA/profile-displayphoto-shrink_100_100/0?e=1583971200&amp;v=beta&amp;t=CHEMfoYkXey6G-mYS9TApaiGb9760AWOUqikz9GDf9c">

<div id="ember1536" class=" presence-entity__indicator presence-entity__indicator--size-4 presence-indicator hidden presence-indicator--size-4 ember-view">
<span class="visually-hidden">
    Status is offline
  </span>
</div>
</div>
</div>
</div>
      </a>
  </div>

  <div class="nt-card__core-rail mt1">
<!---->
<!---->
      <a class="nt-card__headline nt-card__text--3-line nt-card__text--word-wrap t-14 t-black t-normal" href="/feed/update/urn%3Ali%3Aactivity%3A6612179749064200193" data-ember-action="" data-ember-action-1537="1537">
          <span aria-hidden="true">Sarika Shubhanu, your new connection, recently <strong>celebrated 1 year at Gett Jobs Recruitment Firm</strong></span><span class="visually-hidden">Sarika Shubhanu, your new connection, recently celebrated 1 year at Gett Jobs Recruitment Firm</span>
      </a>

<!---->
<!---->
<!---->
      <div id="ember1538" class="nt-card-action-row display-flex mt3 ember-view"><div data-control-name="cta_display" id="ember1540" class="ember-view">    <button class="message-anywhere-button nt-card-action-row__cta nt-card-action-row__cta--message artdeco-button artdeco-button--secondary mr1" aria-label="Send message to Sarika Shubhanu" data-ember-action="" data-ember-action-1541="1541">
                    <span aria-hidden="true">Say congrats</span><span class="visually-hidden">Say congrats to Sarika</span>

    </button>

<div id="ember1628" class="ember-view"><!----></div></div></div>
  </div>

  <div class="nt-card__right-rail display-flex text-align-right">
      <div id="ember1543" class="ember-view"><artdeco-dropdown id="ember1544" class="nt-card-settings-dropdown ember-view"><artdeco-dropdown-trigger aria-expanded="false" role="button" placement="bottom" id="ember1545" class="nt-card-settings-dropdown__trigger ember-view" tabindex="0">      <li-icon type="ellipsis-horizontal-icon" class="nt-card-settings-dropdown__trigger-icon" size="large" role="img" aria-label="Notification options"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-supported-dps="24x24" fill="currentColor" focusable="false">
  <path d="M2 10h4v4H2v-4zm8 4h4v-4h-4v4zm8-4v4h4v-4h-4z"></path>
</svg></li-icon>

<!----></artdeco-dropdown-trigger>
<artdeco-dropdown-content arrow-dir="right" justification="right" placement="bottom" data-dropdown="" tabindex="-1" aria-hidden="true" id="ember1546" class="nt-card-settings-dropdown__content artdeco-dropdown-with-arrow ember-view"><div class="artdeco-dropdown__content-inner">
  <artdeco-dropdown-item data-dropdown="" id="ember1547" class="nt-card-settings-dropdown__item ember-view"><!---->          <button class="nt-card-settings-dropdown__button display-flex align-items-center text-align-left">
            <li-icon aria-hidden="true" type="trash-icon" class="nt-card-settings-dropdown__icon mr2 display-flex" size="medium"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-supported-dps="24x24" fill="currentColor" focusable="false">
  <path d="M19.26 2.9A28 28 0 0015 2.13V1.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v.63a28 28 0 00-4.26.78 1 1 0 00-.74 1V9h1v12a1 1 0 001 1h12a1 1 0 001-1V9h1V3.88a1 1 0 00-.74-.98zM17 20H7V9h10v11zm1-13H6V4.59a26.35 26.35 0 016-.71 26.35 26.35 0 016 .71V7zm-7 11h-1v-7h1v7zm3 0h-1v-7h1v7z"></path>
</svg></li-icon>
            <div>
              <p class="t-14 t-black t-bold">
                Delete
              </p>
              <p class="t-12 t-black--light t-normal">
                Delete this notification
              </p>
            </div>
          </button>
</artdeco-dropdown-item><artdeco-dropdown-item data-dropdown="" id="ember1549" class="nt-card-settings-dropdown__item ember-view"><!---->          <button class="nt-card-settings-dropdown__button display-flex align-items-center text-align-left">
            <li-icon aria-hidden="true" type="block-icon" class="nt-card-settings-dropdown__icon mr2 display-flex" size="medium"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-supported-dps="24x24" fill="currentColor" focusable="false">
  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM3.9 12c0-4.5 3.6-8.1 8.1-8.1 1.9 0 3.7.7 5 1.8L5.6 17c-1.1-1.3-1.7-3.1-1.7-5zm8.1 8.1c-1.9 0-3.7-.7-5-1.8L18.4 7c1.1 1.4 1.8 3.1 1.8 5-.1 4.5-3.7 8.1-8.2 8.1z"></path>
</svg></li-icon>
            <div>
              <p class="t-14 t-black t-bold">
                Unfollow
              </p>
              <p class="t-12 t-black--light t-normal">
                Stop seeing Sarika’s updates
              </p>
            </div>
          </button>
</artdeco-dropdown-item><artdeco-dropdown-item data-dropdown="" id="ember1551" class="nt-card-settings-dropdown__item ember-view"><!---->          <button class="nt-card-settings-dropdown__button display-flex align-items-center text-align-left">
            <li-icon aria-hidden="true" type="error-pebble-icon" class="nt-card-settings-dropdown__icon mr2 display-flex" size="medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
  <circle class="circle" r="9.1" stroke="currentColor" stroke-width="1.8" cx="12" cy="12" fill="none" transform="rotate(-90 12 12)"></circle>
  <path d="M13.238 12l3.463 3.463-1.238 1.237L12 13.237 8.538 16.7 7.3 15.463 10.763 12 7.3 8.537 8.538 7.3 12 10.763l3.452-3.452 1.238 1.237L13.238 12z"></path>
</svg></li-icon>
            <div>
              <p class="t-14 t-black t-bold">
                Turn off
              </p>
              <p class="t-12 t-black--light t-normal">
                Stop receiving notifications like this
              </p>
            </div>
          </button>
</artdeco-dropdown-item>
<!---->
</div>
</artdeco-dropdown-content></artdeco-dropdown></div>

      <p class="nt-card__time-ago t-12 t-black--light t-normal">
        2h
      </p>
  </div>
</div>
</article>

</div>
*/