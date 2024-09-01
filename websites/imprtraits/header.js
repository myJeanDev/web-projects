let headerContent = {
    headerContainer: document.getElementById("header"),
    navContainer: document.createElement("nav"),
    navBox: document.createElement("div"),
    guideBox: document.createElement("div"),
    createGuideBox: ()=>{
        headerContent.headerContainer.appendChild(headerContent.navContainer);
        headerContent.navContainer.appendChild(headerContent.navBox);
        let icon = document.createElement("a");
        icon.href = "https://imprtraits.com";
        icon.classList.add("icon");
        headerContent.navBox.appendChild(icon);
        headerContent.navBox.appendChild(headerContent.guideBox);
        headerContent.guideBox.classList.add("guideBox");
        headerContent.navBox.classList.add("navBox");
        for(let linkCount = 0; linkCount < 4; linkCount++){
            let link = document.createElement("a");
            link.classList.add("guideMarker");
            if(linkCount === 0){
                link.href = "#intro";
                link.id = "guide0";
            }else if(linkCount === 1){
                link.href = "#about";
                link.id = "guide1";
            }else if(linkCount === 2){
                link.href = "#gallery";
                link.id = "guide2";
            }else{
                link.href = "#plans";
                link.id = "guide3";
            }
            headerContent.guideBox.appendChild(link);
        }
    },
    createNavBar: ()=>{
    for(let navBarCount=0;navBarCount < 4;navBarCount++){
        let link = document.createElement("a");
        link.classList.add("navLink");
        headerContent.navContainer.appendChild(link);
        if(navBarCount === 0){
            link.href = "https://imprtraits.com/order/";
            headerContent.createSVGOrder(link);
        }else if(navBarCount === 1){
            link.href = "https://imprtraits.com/about/";
            headerContent.createSVGAbout(link);
        }else if(navBarCount === 2){
            link.href = "https://imprtraits.com/gallery/";
            headerContent.createSVGGallery(link);
        }else{
            link.href = "https://imprtraits.com/logIn/";
            headerContent.createSVGAccount(link);
        }
        console.log(link);
    }
    },
    createSVGOrder:(node)=>{
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
        );

        iconSvg.setAttribute('fill', 'none');
        iconSvg.setAttribute('viewBox', '0 0 448 512');
        iconSvg.setAttribute('stroke', 'black');
        iconSvg.classList.add('post-icon');

        iconPath.setAttribute(
            'd',
            'M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'
        );
        iconPath.setAttribute('stroke-linecap', 'round');
        iconPath.setAttribute('stroke-linejoin', 'round');
        iconPath.setAttribute('stroke-width', '12');

        iconSvg.appendChild(iconPath);
        iconSvg.classList.add("smallerIcon");
        return node.appendChild(iconSvg);
    },
    createSVGAbout:(node)=>{
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
        );

        iconSvg.setAttribute('fill', 'none');
        iconSvg.setAttribute('viewBox', '0 0 640 512');
        iconSvg.setAttribute('stroke', 'black');
        iconSvg.classList.add('post-icon');

        iconPath.setAttribute(
            'd',
            'M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z'
        );
        iconPath.setAttribute('stroke-linecap', 'round');
        iconPath.setAttribute('stroke-linejoin', 'round');
        iconPath.setAttribute('stroke-width', '12');

        iconSvg.appendChild(iconPath);
        iconSvg.classList.add("smallerIcon");
        return node.appendChild(iconSvg);
    },
    createSVGGallery:(node)=>{
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
        );

        iconSvg.setAttribute('fill', 'none');
        iconSvg.setAttribute('viewBox', '0 0 576 512');
        iconSvg.setAttribute('stroke', 'black');
        iconSvg.classList.add('post-icon');

        iconPath.setAttribute(
            'd',
            'M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z'
        );
        iconPath.setAttribute('stroke-linecap', 'round');
        iconPath.setAttribute('stroke-linejoin', 'round');
        iconPath.setAttribute('stroke-width', '12');

        iconSvg.appendChild(iconPath);
        iconSvg.classList.add("smallerIcon");
        return node.appendChild(iconSvg);
    },
    createSVGAccount:(node)=>{
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
        );

        iconSvg.setAttribute('fill', 'none');
        iconSvg.setAttribute('viewBox', '0 0 448 512');
        iconSvg.setAttribute('stroke', 'black');
        iconSvg.classList.add('post-icon');

        iconPath.setAttribute(
            'd',
            'M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z'
        );
        iconPath.setAttribute('stroke-linecap', 'round');
        iconPath.setAttribute('stroke-linejoin', 'round');
        iconPath.setAttribute('stroke-width', '12');

        iconSvg.appendChild(iconPath);
        iconSvg.classList.add("smallerIcon");
        return node.appendChild(iconSvg);
    },
};
headerContent.createGuideBox();
headerContent.createNavBar();

        // <header id="header">
        //     <nav>
            
            
        //         <div class="navBox">
        //             <a href="#" class="icon"></a>
                    
                    
        //             <div class="guideBox">
        //                 <a href="#intro" id="guide0" class="guideMarker"></a>
        //                 <a href="#about" id="guide1" class="guideMarker"></a>
        //                 <a href="#gallery" id="guide2" class="guideMarker"></a>
        //                 <a href="#plans" id="guide3" class="guideMarker"></a>
        //             </div>
                    
        //         </div>
                
                
        //         <a href="order/order.php" class="navLink"><svg xmlns="http://www.w3.org/2000/svg" class="smallerIcon" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg></a>
        //         <a href="about/about.html" class="navLink"><svg xmlns="http://www.w3.org/2000/svg" class="smallerIcon" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/></svg></a>
        //         <a href="gallery/gallery.html" class="navLink"><svg xmlns="http://www.w3.org/2000/svg" class="smallerIcon" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg></a>
        //         <a class="navLink" href="../account/logInPage.php"><svg xmlns="http://www.w3.org/2000/svg" class="smallerIcon" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></a>
        //         <!--<a href="blog/blog.html" class="navLink">Blog</a>-->
        //     </nav>
        // </header>
        
            //         <nav>
            //     <div class="navBox">
            //         <a href="#" class="icon"></a>
            //         <div class="guideBox">
            //             <a href="#intro" id="guide0" class="guideMarker"></a>
            //             <a href="#about" id="guide1" class="guideMarker"></a>
            //             <a href="#gallery" id="guide2" class="guideMarker"></a>
            //             <a href="#plans" id="guide3" class="guideMarker"></a>
            //         </div>
            //     </div>
            //     <a href="order/order.php" class="navLink"><svg xmlns="http://www.w3.org/2000/svg" class="smallerIcon" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg></a>
            //     <a href="about/about.html" class="navLink"><svg xmlns="http://www.w3.org/2000/svg" class="smallerIcon" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/></svg></a>
            //     <a href="gallery/gallery.html" class="navLink"><svg xmlns="http://www.w3.org/2000/svg" class="smallerIcon" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg></a>
            //     <a class="navLink" href="../account/logInPage.php"><svg xmlns="http://www.w3.org/2000/svg" class="smallerIcon" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></a>
            //     <!--<a href="blog/blog.html" class="navLink">Blog</a>-->
            // </nav>