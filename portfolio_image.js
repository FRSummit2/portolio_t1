!( async ($) => {
    "use strict";

    let img_data = null

    let base_url = 'https://script.google.com/macros/s/AKfycbxkPBys3wstBkcGWIRjRyVEYY4iexHkSnGpbgWq60G72rGRYm5C/exec'

    await fetch(base_url + '?action=readAll', {
            method: 'GET',
            // crossDomain: true,
            // dataType: 'jsonp',
            // withCredentials: false,
            params: {
                action: 'readAll',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            img_data = data.records


            for (let i = 0; i < img_data.length; i++) {
                // console.log(img_data[i])
                // console.log(img_data[i].SRC.split('/view')[0].split('file/d/')[1])
                // let img_src_data = 'https://drive.google.com/thumbnail?id=' + img_data[i].SRC.split('/view')[0].split('file/d/')[1]
                let img_src_data = 'https://drive.google.com/uc?id=' + img_data[i].SRC.split('/view')[0].split('file/d/')[1]
                // CARD
                let card = document.createElement('div')
                card.className = 'col-lg-4 col-md-6 portfolio-item ' + img_data[i].CLASS
        
                // WRAPPER
                let portfolio_wrap = document.createElement('div')
                portfolio_wrap.className = 'portfolio-wrap'
                card.append(portfolio_wrap)
        
                // IMAGE
                let img = document.createElement('img')
                img.className = 'img-fluid'
                // img.src = img_data[i].SRC
                img.src = img_src_data
                img.style.width = '100%'
                // img.style.width = '332px'
                portfolio_wrap.append(img)
        
                // LINKS
                let portfolio_links = document.createElement('div')
                portfolio_links.className = 'portfolio-links'
                portfolio_links.innerHTML = `<a href="` + img_src_data  /* 'assets/img/projects/om/om_13.png '*/ + `" data-gall="portfolioGallery" class="venobox" title="Card 1"><i class="bx bx-plus"></i></a>
                                            <a href="` + img_data[i].URL /* 'portfolio-details.html' */ + `" title="More Details"><i class="bx bx-link"></i></a>`
                portfolio_wrap.append(portfolio_links)
        
                document.querySelector('.row.portfolio-container').append(card)
                document.querySelector('.row.portfolio-container').style.height = 'auto'
            }
        });

        

    // $.ajax({
    //         url: base_url + '?action=readAll',
    //         method: 'GET'
    //     })
    //     .done( res => {
    //         console.log(res)
    //         console.log(JSON.parse(res).records)
    //         data = JSON.parse(res).records

    //         for (let i = 0; i < data.length; i++) {
    //             // CARD
    //             let card = document.createElement('div')
    //             card.className = 'col-lg-4 col-md-6 portfolio-item ' + data[i].class
        
    //             // WRAPPER
    //             let portfolio_wrap = document.createElement('div')
    //             portfolio_wrap.className = 'portfolio-wrap'
    //             card.append(portfolio_wrap)
        
    //             // IMAGE
    //             let img = document.createElement('img')
    //             img.className = 'portfolio-wrap'
    //             img.src = data[i].src
    //             img.style.width = '332px'
    //             portfolio_wrap.append(img)
        
    //             // LINKS
    //             let portfolio_links = document.createElement('div')
    //             portfolio_links.className = 'portfolio-links'
    //             portfolio_links.innerHTML = `<a href="` + data[i].src  /* 'assets/img/projects/om/om_13.png '*/ + `" data-gall="portfolioGallery" class="venobox" title="Card 1"><i class="bx bx-plus"></i></a>
    //                                         <a href="` + data[i].url /* 'portfolio-details.html' */ + `" title="More Details"><i class="bx bx-link"></i></a>`
    //             portfolio_wrap.append(portfolio_links)
        
    //             document.querySelector('.row.portfolio-container').append(card)
    //         }
    //     })

    // $.getJSON("https://script.google.com/macros/s/AKfycbxkPBys3wstBkcGWIRjRyVEYY4iexHkSnGpbgWq60G72rGRYm5C/exec", function (data) {
    //     console.log(data.feed.entry[0]);
    //     var sheetData = data.feed.entry;
    //     console.log(sheetData)
    // });

    // let img_src = 'assets/img/projects/om/'
    // erp, filter-oracle-maxymiser, filter-atc
    
    
    /*
    
    let img_arr = [

        // ERP - STARTS
        {
            project: 'ERP',
            class: 'filter-erp',
            src: 'assets/img/projects/erp/ERP.png',
            url: 'portfolio-details-erp.html'
        },
        {
            project: 'ERP',
            class: 'filter-erp',
            src: 'assets/img/projects/erp/mdp.png',
            url: 'portfolio-details-erp.html'
        },
        {
            project: 'ERP',
            class: 'filter-erp',
            src: 'assets/img/projects/erp/ds.png',
            url: 'portfolio-details-erp.html'
        },
        // ERP - ENDS

        // ORACLE MAXYMISER - STARTS
        {
            project: 'ORACLE MAXYMISER',
            class: 'filter-oracle-maxymiser',
            src: 'assets/img/projects/om/om_1.png',
            url: 'portfolio-details_oracle_maxymiser.html'
        },
        {
            project: 'ORACLE MAXYMISER',
            class: 'filter-oracle-maxymiser',
            src: 'assets/img/projects/om/om_2.png',
            url: 'portfolio-details_oracle_maxymiser.html'
        },
        {
            project: 'ORACLE MAXYMISER',
            class: 'filter-oracle-maxymiser',
            src: 'assets/img/projects/om/om_3.png',
            url: 'portfolio-details_oracle_maxymiser.html'
        },
        {
            project: 'ORACLE MAXYMISER',
            class: 'filter-oracle-maxymiser',
            src: 'assets/img/projects/om/om_4.png',
            url: 'portfolio-details_oracle_maxymiser.html'
        },
        // {
        //   project: 'ORACLE MAXYMISER',
        //   class: 'filter-oracle-maxymiser',
        //   src: 'assets/img/projects/om/om_5.png',
        //   url: 'portfolio-details_oracle_maxymiser.html'
        // },
        // {
        //   project: 'ORACLE MAXYMISER',
        //   class: 'filter-oracle-maxymiser',
        //   src: 'assets/img/projects/om/om_6.png',
        //   url: 'portfolio-details_oracle_maxymiser.html'
        // },
        // {
        //   project: 'ORACLE MAXYMISER',
        //   class: 'filter-oracle-maxymiser',
        //   src: 'assets/img/projects/om/om_7.png',
        //   url: 'portfolio-details_oracle_maxymiser.html'
        // },
        // {
        //   project: 'ORACLE MAXYMISER',
        //   class: 'filter-oracle-maxymiser',
        //   src: 'assets/img/projects/om/om_8.png',
        //   url: 'portfolio-details_oracle_maxymiser.html'
        // },
        // {
        //   project: 'ORACLE MAXYMISER',
        //   class: 'filter-oracle-maxymiser',
        //   src: 'assets/img/projects/om/om_9.png',
        //   url: 'portfolio-details_oracle_maxymiser.html'
        // },
        // {
        //   project: 'ORACLE MAXYMISER',
        //   class: 'filter-oracle-maxymiser',
        //   src: 'assets/img/projects/om/om_10.png',
        //   url: 'portfolio-details_oracle_maxymiser.html'
        // },
        // {
        //   project: 'ORACLE MAXYMISER',
        //   class: 'filter-oracle-maxymiser',
        //   src: 'assets/img/projects/om/om_11.png',
        //   url: 'portfolio-details_oracle_maxymiser.html'
        // },
        {
            project: 'ORACLE MAXYMISER',
            class: 'filter-oracle-maxymiser',
            src: 'assets/img/projects/om/om_12.png',
            url: 'portfolio-details_oracle_maxymiser.html'
        },
        {
            project: 'ORACLE MAXYMISER',
            class: 'filter-oracle-maxymiser',
            src: 'assets/img/projects/om/om_13.png',
            url: 'portfolio-details_oracle_maxymiser.html'
        },
        // ------------------------------------------
        {
            project: 'ORACLE MAXYMISER',
            class: 'filter-oracle-maxymiser',
            src: 'assets/img/projects/oracle-maxymiser/om1.png',
            url: 'portfolio-details_oracle_maxymiser.html'
        },
        {
            project: 'ORACLE MAXYMISER',
            class: 'filter-oracle-maxymiser',
            src: 'assets/img/projects/oracle-maxymiser/om2.png',
            url: 'portfolio-details_oracle_maxymiser.html'
        },
        {
            project: 'ORACLE MAXYMISER',
            class: 'filter-oracle-maxymiser',
            src: 'assets/img/projects/oracle-maxymiser/om3.png',
            url: 'portfolio-details_oracle_maxymiser.html'
        },
        // {
        //     project: 'ORACLE MAXYMISER',
        //     class: 'filter-oracle-maxymiser',
        //     src: 'assets/img/projects/oracle-maxymiser/om4.png',
        //     url: 'portfolio-details_oracle_maxymiser.html'
        // },
        // {
        //     project: 'ORACLE MAXYMISER',
        //     class: 'filter-oracle-maxymiser',
        //     src: 'assets/img/projects/oracle-maxymiser/om5.png',
        //     url: 'portfolio-details_oracle_maxymiser.html'
        // },
        // {
        //     project: 'ORACLE MAXYMISER',
        //     class: 'filter-oracle-maxymiser',
        //     src: 'assets/img/projects/oracle-maxymiser/om6.png',
        //     url: 'portfolio-details_oracle_maxymiser.html'
        // },
        // {
        //     project: 'ORACLE MAXYMISER',
        //     class: 'filter-oracle-maxymiser',
        //     src: 'assets/img/projects/oracle-maxymiser/om7.png',
        //     url: 'portfolio-details_oracle_maxymiser.html'
        // },
        // {
        //     project: 'ORACLE MAXYMISER',
        //     class: 'filter-oracle-maxymiser',
        //     src: 'assets/img/projects/oracle-maxymiser/om8.png',
        //     url: 'portfolio-details_oracle_maxymiser.html'
        // },
        // {
        //     project: 'ORACLE MAXYMISER',
        //     class: 'filter-oracle-maxymiser',
        //     src: 'assets/img/projects/oracle-maxymiser/om9.png',
        //     url: 'portfolio-details_oracle_maxymiser.html'
        // },
        // {
        //     project: 'ORACLE MAXYMISER',
        //     class: 'filter-oracle-maxymiser',
        //     src: 'assets/img/projects/oracle-maxymiser/om10.png',
        //     url: 'portfolio-details_oracle_maxymiser.html'
        // },
        // {
        //     project: 'ORACLE MAXYMISER',
        //     class: 'filter-oracle-maxymiser',
        //     src: 'assets/img/projects/oracle-maxymiser/om11.png',
        //     url: 'portfolio-details_oracle_maxymiser.html'
        // },
        {
            project: 'ORACLE MAXYMISER',
            class: 'filter-oracle-maxymiser',
            src: 'assets/img/projects/oracle-maxymiser/om12.png',
            url: 'portfolio-details_oracle_maxymiser.html'
        },
        {
            project: 'ORACLE MAXYMISER',
            class: 'filter-oracle-maxymiser',
            src: 'assets/img/projects/oracle-maxymiser/om13.png',
            url: 'portfolio-details_oracle_maxymiser.html'
        },
        // ORACLE MAXYMISER - ENDS

        // ADOBE TARGET CLOUD - STARTS
        {
            project: 'ADOBE TARGET CLOUD',
            class: 'filter-atc',
            src: 'assets/img/projects/adobe-target/news-corp/heraldsun/ATC1.png',
            url: 'portfolio-details_adobe_target_cloud.html'
        },
        {
            project: 'ADOBE TARGET CLOUD',
            class: 'filter-atc',
            src: 'assets/img/projects/adobe-target/news-corp/heraldsun/ATC2.png',
            url: 'portfolio-details_adobe_target_cloud.html'
        },
        {
            project: 'ADOBE TARGET CLOUD',
            class: 'filter-atc',
            src: 'assets/img/projects/adobe-target/news-corp/heraldsun/ATC3.png',
            url: 'portfolio-details_adobe_target_cloud.html'
        },
        {
            project: 'ADOBE TARGET CLOUD',
            class: 'filter-atc',
            src: 'assets/img/projects/adobe-target/news-corp/the-australian/ATC4.png',
            url: 'portfolio-details_adobe_target_cloud.html'
        },
        {
            project: 'ADOBE TARGET CLOUD',
            class: 'filter-atc',
            src: 'assets/img/projects/adobe-target/news-corp/the-australian/ATC5.png',
            url: 'portfolio-details_adobe_target_cloud.html'
        },
        // ADOBE TARGET CLOUD - ENDS

        // OPTIMIZELY - STARTS
        // OPTIMIZELY - ENDS

        // HRM - STARTS
        // HRP - ENDS

        // IPDC - STARTS
        // IPDC - ENDS

        // MMSPL - STARTS
        // MMSPL - ENDS

        // CRM - STARTS
        // CRM - ENDS

        // APP - STARTS
        // APP - ENDS
        
    ]
    
    */


    /*
    let template_img = `
          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" class="venobox" title="Card 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>`

    for (let i = 0; i < img_arr.length; i++) {
        // CARD
        let card = document.createElement('div')
        card.className = 'col-lg-4 col-md-6 portfolio-item ' + img_arr[i].class

        // WRAPPER
        let portfolio_wrap = document.createElement('div')
        portfolio_wrap.className = 'portfolio-wrap'
        card.append(portfolio_wrap)

        // IMAGE
        let img = document.createElement('img')
        img.className = 'portfolio-wrap'
        img.src = img_arr[i].src
        img.style.width = '332px'
        portfolio_wrap.append(img)

        // LINKS
        let portfolio_links = document.createElement('div')
        portfolio_links.className = 'portfolio-links'
        portfolio_links.innerHTML = `<a href="` + img_arr[i].src + `" data-gall="portfolioGallery" class="venobox" title="Card 1"><i class="bx bx-plus"></i></a>
                                    <a href="` + img_arr[i].url + `" title="More Details"><i class="bx bx-link"></i></a>`
        portfolio_wrap.append(portfolio_links)

        document.querySelector('.row.portfolio-container').append(card)
    }
    
    */

})(jQuery);