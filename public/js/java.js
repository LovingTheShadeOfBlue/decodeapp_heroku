"use strict";

class App{
  constructor(){
    this.coc = [
      {
        "id": 1,
        "name": "Hello Kitty Creative Base",
        "description": "One of the cutest base in clash of clans is the Hello kitty base, It won the top 10 Simple Creative Base in 2015",
        "image": "img/coc12.jpg",
      
      },
      {
        "id": 2,
        "name": "Semi Flower War base",
        "description": "The Semi Flower Base is one of the most famous base used in clash of clans because it definitely helps the inner structures of the base which it makes hard to 3 stars or completely destory your base, Inferno and teslas in the center complicates every attacker in this base. ",
        "image": "img/th10.jpg",
       
      },
      {
        "id": 3,
        "name": "Flower War Base",
        "description": "The Flower Base are known as the Protector which it protects the Resources in the center and the attackers takes time to loot all the storages because it is well distributed in each petals or corner of the base",
        "image": "img/th10part1.jpg",
      },
      {
        "id": 4,
        "name": "Star Rose Hybrid Base",
        "description": "One of the famous bases in clash of clans, the base itself symbolizes it's true beauty not just in protecting your resources but a complicated base which is hard to destory completely",
        "image": "img/thh9.jpg",
       
      },
      {
        "id": 5,
        "name": "Semi Box Flower Base ",
        "description": "Semi Box Flower base symbolizes the nature of a flower base but in a different perspective. It is a hybrid base in which the attackers takes time to destory this base and the storages are well places to prevent them for looting.",
        "image": "img/thhh.jpg",
       
      },    
      {
        "id": 6,
        "name": "Semi Anti-Hogs/Dragon Base",
        "description": "The name itself says it all, An Anti hogs and Dragon base is a quite wonderful strategic design which the attackers are more hesitating to use Hogs and Dragon for War, though it is easily destroy by a GOWIPE( Golem Wizard Pekka) Strategy, Lower town halls will surely feel aggravate when attacking this base",
        "image": "img/thh99.jpg",
       
      }, 
      {
        "id": 7,
        "name": "Legendary Townhall 11 Base",
        "description": "Max towers, Walls and a perfect positions for defenses makes it unstoppable that no one can pass through the center, The Legendary town hall 11 Base is so fascinating that no one can fully destroy the base even the creators or top clans are talking about this strategic base .",
        "image": "img/th9part2.jpg",
       
      },   
      {
        "id": 8,
        "name": "Creative Base",
        "description": "Enjoy and unwind your base and show them your creativity in designing not just in the reality but in game also.",
        "image": "img/th9part.jpg",
       
      },    
      {
        "id": 9,
        "name": "Farming Base",
        "description": "Farming Bases are basically the opposite of War bases. Farming bases rarely have wars and just like the name suggests they farm. The only point in joining a farming clan is to get high level troops for your farming.",
        "image": "img/thqwerty.jpg",
       
      },   
      {
        "id": 10,
        "name": "War Base",
        "description": "A Hardcore clan, better known as a Trophy Pushing clan, is constructed around the idea of constantly warring. They mostly always have wars that go from back to back, and usually never stop, so be prepared to invest precious time.",
        "image": "img/threese.jpg",
       
      }   


    ];

    this.media = [
      {
        "img" : "img/coc1.gif",
        "alignment" : "center-align",
        "caption": "Welcome to Clash of Clans Base Design",
        
      },
      {
        "img" : "img/coc2.gif",
        "alignment" : "right-align",
        "caption": "Design your fascinating base",
        
      },
      {
        "img" : "img/coc3.gif",
        "alignment" : "left-align",
        "caption": "Check and Delete unwanted bases",
        
      },
      {
        "img" : "img/coc4.gif",
        "alignment" : "center-align",
        "caption": "Watch Fun Clips and Strategies",
        
      }
    ];

    this.homepage = [
    	{

    	 "picture": "img/govalu.jpg",
        "titlename": "GoVaLoons!",
        "desc": "GoVaLo (Golem, Valkyrie and Balloon) and GoVaHo (Golem, Valkyrie and Hog) are two nearly identical and new 3-star hybrid war strategies. ",
        "link": "https://www.youtube.com/watch?v=53TewsIlYR4",
        "linkname":"Watch GoVaLo Strategy",

    	},
    	{

    	 "picture": "img/allhogs.jpg",
        "titlename": "All Hogs",
        "desc": "The Hog Rider attack is a popular and powerfull strategy. It requires some ... When these units are cleared and simply spawn all of your hog riders.",
        "link": "https://www.youtube.com/watch?v=k3L2TVNgy2M",
         "linkname":"All Hogs!!",

    	},
    	{

    	 "picture": "img/gowiwi.jpg",
        "titlename": "GoWiWi!",
        "desc": "Hey Clashers! Bringing you all some Earthquake GoWiWi Three star replays today from D Nation. Enjoy the episode and highlight four keys to executing a perfect 3 star attack in your clan war! ",
        "link": "https://www.youtube.com/watch?v=KS66a91D_3w",
         "linkname":"GoWiWi!",

    	},
    	{

    	 "picture": "img/maxballoons.jpg",
        "titlename": "Max Ballons Attack!",
        "desc": "110 Maxed out Balloons in Clash of Clans battling for all the loot! Boom Beach, Clash Royale hide-on-med-and-down Clash of Clans Guide Gameplay High Level Tips Updates Best Defenses Tutorials ..",
        "link": "https://www.youtube.com/watch?v=bXnJTXZPNd0",
         "linkname":"Max Balloons",

    	}





    ];

  }


  
  



  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

  createDesign(){
    let id = document.getElementById('base_id');
    let name = document.getElementById('coc_name');
    let description = document.getElementById('coc_description');
    let image = document.getElementById('coc_image');
  

    let coc = {      
      "id": id.value,
      "name": name.value,
      "description": description.value,
      "image": image.value,
     
    };


    this.coc.push(coc);

    
    id.value = name.value = description.value = image.value = ''; 
  } 

  deleteBase(key){
    let r = this.coc;
    for(let i=0;i<r.length;i++){
      if(r[i].id == key){
        this.coc.splice(i,1);
        break;
      }
    }   
    this.cocList();
  }

  searchBaseById(id){
    let r = this.coc;
    for(let i=0;i<r.length;i++){
      if(id==r[i].id){
        return r[i];
      }
    }
  } 

  searchBase(name){
    let objects = [];
    let r = this.coc;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
      if(expr){
        objects.push(r[i]);
      }
    }
    return objects;
  }


}

class Component extends App{
  constructor(){
    
    super();
  }

  baseLayout(){
    let html = `
   

`;

html+=`
  <nav>
    <div class="nav-wrapper purple darken-1">
      <a href="#" onclick="component.cocList()" class="brand-logo"> Clash of Clans </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>
      <li><a href="#" onclick="component.landingPage()"><i class="material-icons left">stay_primary_portrait</i>Home</a></li>
    <li><a href="#" onclick="component.cocList()"><i class="material-icons left">assignment</i>Bases</a></li>  
  <li><a href="#" onclick="component.createBase()"><i class="material-icons left">note_add</i>Create Base</a></li>
  <li><a href="#" onclick="component.cocVideos()"><i class="material-icons left">movie</i>Mini Clips</a></li>
        

       
      </ul>

     
    </div>
    </nav>


</div>

<div class="slider">
    <ul class="slides">
`;

 for(let i=0;i<this.media.length;i++){
  html+=`

   <li>
        <img src="${this.media[i].img}"> <!-- random image -->
        <div class="caption ${this.media[i].alignment}">
          <h1>${this.media[i].caption} </h1>      
        </div>
      </li>
   

`;

}


html+=`

   </ul>
   

         <div id="landingPage"></div>
        <div id="cocRecent"></div>
        <div id="cocView"></div>
        <div id="cocList"></div>
        <div id="createBase"></div>
        <div id="cocVideos"></div>
        
     

  
                  <footer class="page-footer purple darken-1">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text"><i class="material-icons center">assignment_ind</i>Reese Simon C.Dela Cruz</h5>
                <p class="grey-text text-lighten-4">Thank you for Visiting!</p>
                <p><a class="grey-text text-lighten-3" href="https://www.facebook.com/Aruukazorudickuru">
                 <img class="left" src="img/decode.png"/>

                
                         

              </div>
              <div class="col l4 offset-l2 s12 ">
                <h5 class="white-text ">Clash of Clans </h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!"onclick="component.landingPage()">Home</li>
                  <li><a class="grey-text text-lighten-3" href="#!"onclick="component.createBase()">Create Base</li>
                  <li><a class="grey-text text-lighten-3" href="#!"onclick="component.cocList()"">Base</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"onclick="component.cocVideos()">Mini Clips</li>
                    
                </ul>
                </div>
                  <p><a class="grey-text text-lighten-3" href="https://www.facebook.com/Aruukazorudickuru">
              </div>
             @Web Developer
               </div>
            
            </div>
          </div>
        
 
   <div class="footer-copyright">
         
             <ul>©Supercell 2016</ul>
                       
 


          
            </div>

            

          </div>
          
        </footer>

    `;

    this.reRender(`
      ${html}

      `,document.getElementById("app"));
    this.cocRecent();    
  }

  cocRecent(){
    
    let html = `

    
        <div class="col s12 m12">
          <div class="card">
            <div class="card-image">
              <img src="img/coc5.gif">
                 <span class="card-title">Welcome to Clash of Clans Base Designs and Strategies</span>
            </div>
           
            <div class="card-action">
            <center>
              <a href="#"onclick="component.createBase()"><i class="material-icons center">note_add</i> Create Base Designs</a>
               <a href="#"onclick="component.cocVideos()"><i class="material-icons center">movie</i> Watch Mini Clips</a>
               </center>
            </div>
          </div>
        </div>
      </div>

<video class="responsive-video" controls>
    <source src="img/Clash of Clans Hog Rider 360.mp4" type="video/mp4">
  </video>


      `;

  for(let index=0;index<this.homepage.length;index++)
 {
 	html+=`
 	<div class="row">
     
       <div class="col s6 m6">
          <div class="card">
            <div class="card-image">
              <img src="${this.homepage[index].picture}">
              <span class="card-title">${this.homepage[index].titlename}</span>
            </div>
            <div class="card-content">
              <p>${this.homepage[index].desc}</p>
            </div>
            <div class="card-action">
          <a href="${this.homepage[index].link}"><i class="material-icons center">movie</i> ${this.homepage[index].linkname}</a>
            </div>
          </div>
        </div>

      `;
  }


      html+=`

      <div class="row">

          <div class="col s12 m12">
          <div class="card">
            <div class="card-image">
              <img src="http://67.media.tumblr.com/ee7b0f016206b3b1a13ceac21ad4d010/tumblr_ofnzrgo6QX1qd6awxo1_540.jpg">
                 <span class="card-title">The Witch</span>

            </div>      
           <div class="card-action">
          <div class="card-content">
          <p>The Witch is a powerful troop that can summon dead warriors from past battles (Skeletons). She can be used as a support troop (similar to the way the Healer works) and when used correctly, can wipe a battlefield with ease.</p>
            
               <a href="http://clashofclans.wikia.com/wiki/Witch"><i class="material-icons center">assignment</i> Details</a>
               </center>
            </div>
          </div>
        </div>
      </div>

         

     

    
             <div class="row">
    `;

    let r = this.coc;
    let count = 0;
    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 6)break;
      html+= `
        <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].image}">
              <span class="card-title">${r[i].name}</span>
            </div>
            <div class="card-content">
              <p>${r[i].description}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="component.cocView(${r[i].id})"><i class="material-icons center">assignment</i> Details</a>
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;

    this.render(`   
      ${html}
      `,document.getElementById("cocRecent"));
  }

  cocView(id){
    let r = this.searchBaseById(id);

    let html = `


 <div class="col s12 m12">
          <div class="card">
            <div class="card-image">
              <img src="img/cocdesign.jpg">
                 <span class="card-title">Base List</span>
            </div>



      <h5 class="center-align">${r.name}</h5>
      <div class="row">       
        <div class="col s12 m12">
          <div class="card">
            <div class="card-image">
              <img src="${r.image}">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>${r.description}</p>
              </div>
            <div class="card-action small">               
                <span onclick="component.deleteBase(${r.id})" class="new badge small red" data-badge-caption="">Delete Base</span>
               <span onclick="component.cocList()" class="new badge small" data-badge-caption="">Back to List</span>
              </div>            
            </div>     
          </div>   
          
        </div>      
      </div>
    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("cocView"));
    $('#cocView').show();
    $('#cocRecent').hide();
    $('#cocList').hide();
    $('#createBase').hide();
     $('#cocVideos').hide();
      $('#landingPage').hide();
  }

  cocList(){
    let html = `

<div class="col s12 m7">
          <div class="card">
            <div class="card-image">
         <img src="img/cocdesign.jpg">
              <span class="card-title">Base List</span>
            </div>
          </div>
        </div>
      </div>


             
</di>

      <br/>
        <nav>
          <div class="nav-wrapper white">
          <form>
            <div class="input-field">       
              <input onkeyup="component.cocItems(this.value)" id="search" type="search" placeholder="Search" required>
              <label for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <br/>

    `;

    html += `
      <div class="row" id="cocItems">
    `;
    let r = this.coc;
    for(let i=0;i<r.length;i++){
      html+= `
        <div class="col s12 m4">
        <div class="card medium hoverable">
            <div class="card-image">
              <img src="${r[i].image}">
              <span class="card-title">${r[i].name}</span>
            </div>
            <div class="card-content">
              <p>${r[i].description}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="component.cocView(${r[i].id})"><i class="material-icons center">assignment</i> Details</a>
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;

    this.reRender(`
      ${html}
      `,document.getElementById("cocList"));
    $('#cocList').show();
    $('#cocView').hide();
    $('#cocRecent').hide();
    $('#createBase').hide();    
        $('#cocVideos').hide();    
         $('#landingPage').hide();
  }

  cocItems(name){
    let html = ``;
    let r = this.searchBase(name);
    for(let i=0;i<r.length;i++){
      html+= `
        <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].image}">
              <span class="card-title">${r[i].name}</span>
            </div>
            <div class="card-content">
              <p>${r[i].description}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="component.cocView(${r[i].id})">More</a>
            </div>
          </div>
        </div>
      `;
    }   
    this.reRender(`
      ${html}
      `,document.getElementById("cocItems"));
    $('#cocList').show();
    $('#cocView').hide();
    $('#cocRecent').hide();  
    $('#createBase').hide();
        $('#cocVideos').hide();    
        $('#landingPage').hide();    
  }

  createBase(){
    let html = `

   
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
           <center><img src="img/warbase.jpg"></center>
              <span class="card-title">Powered by Reese</span>
            </div>
          </div>
        </div>
      </div>

          
      
         
              <input disabled value="${this.coc.length+1}" id="base_id" type="text" class="pink lighten-1">
            </div>
          <div class="input-field col s6 ">
              <input id="coc_name" type="text" class="  yellow lighten-1">
              <label for="coc_name"><i class="material-icons center">perm_contact_calendar</i> Enter Base Name</label>
            </div>
          </div>
          
          <div class="row">
            <div class="input-field col s6 ">
              <input id="coc_description" type="text" class=" light-green accent-1">
             <label for="coc_description"><i class="material-icons center">description</i> Enter Description</label>
            </div>
            <div class="input-field col s6 ">
              <input id="coc_image" type="text" class="deep-orange lighten-1">
              <label for="coc_image"><i class="material-icons center">assignment_ind</i> Enter Image Address</label>
            </div>
        <div align="center">
       <button onclick="component.cocList()" class="btn waves-effect waves-light">Back</button>
      
             <button onclick="component.createDesign()" class="btn waves-effect waves-light">Save</button>
         </div>
      
         

       <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="http://clashlayouts.com/wp-content/uploads/2015/11/town-hall-3-war-95-david-mini.png">
              <span class="card-title">Town hall 3 !</span>
            </div>
            <div class="card-content">
            	
            </div>
            <div class="card-action">
          <a href="http://clashlayouts.com/wp-content/uploads/2015/11/town-hall-3-war-95-david-mini.png"><i class="material-icons center">assignment</i> Click here </a>
            </div>
          </div>
        </div>

<div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="http://clashlayouts.com/wp-content/uploads/2015/11/town-hall-4-war-84-william-mini.png">
              <span class="card-title">Town hall 4 !</span>
            </div>
            <div class="card-content">
            	
            </div>
            <div class="card-action">
          <a href="http://clashlayouts.com/wp-content/uploads/2015/11/town-hall-4-war-84-william-mini.png"><i class="material-icons center">assignment</i> Click here </a>
            </div>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="http://s3wc5.goplay.com/wysiwyg/2015/12/28/Clash-of-Clans-TH-5-base-5.jpg">
              <span class="card-title">Town hall 5 !</span>
            </div>
            <div class="card-content">
            	
            </div>
            <div class="card-action">
           <a href="http://s3wc5.goplay.com/wysiwyg/2015/12/28/Clash-of-Clans-TH-5-base-5.jpg"><i class="material-icons center">assignment</i> Click here </a>
            </div>
          </div>
        </div>

         <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="https://perniciousarmy.files.wordpress.com/2015/02/th-6-war-2.jpg">
              <span class="card-title">Town hall 6 !</span>
            </div>
            <div class="card-content">
            	
            </div>
            <div class="card-action">
          <a href="https://perniciousarmy.files.wordpress.com/2015/02/th-6-war-2.jpg"><i class="material-icons center">assignment</i> Click here </a>
            </div>
          </div>
        </div>

         <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="https://sites.google.com/site/reeseclashers/_/rsrc/1468867298769/home/war-base/th7%20warbase.jpg">
              <span class="card-title">Town hall 7 !</span>
            </div>
            <div class="card-content">
            	
            </div>
            <div class="card-action">
          <a href="https://sites.google.com/site/reeseclashers/_/rsrc/1468867298769/home/war-base/th7%20warbase.jpg"><i class="material-icons center">assignment</i> Click here </a>
            </div>
          </div>
        </div>


         <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="http://s3wc1.goplay.com/wysiwyg/2016/03/03/Clash-of-Clans-TH-8-base-5.jpg">
              <span class="card-title">Town hall 8 !</span>
            </div>
            <div class="card-content">
            	
            </div>
            <div class="card-action">
          <a href="http://s3wc1.goplay.com/wysiwyg/2016/03/03/Clash-of-Clans-TH-8-base-5.jpg"><i class="material-icons center">assignment</i> Click here </a>
            </div>
          </div>
        </div>









        
      

    `;

    this.reRender(`
      ${html}
      `,document.getElementById("createBase"));
    $('#createBase').show();
    $('#cocList').hide();
    $('#cocView').hide();
    $('#cocRecent').hide();  
    $('#cocVideos').hide(); 
    $('#landingPage').hide();    
  }

  cocVideos(){
    let html =`
    
       
         
  
   <div class="row">
        <div class="col s12 m12">
          <div class="card">
            <div class="card-image">
              <img src="https://i.ytimg.com/vi/e7xLg0eDaXk/maxresdefault.jpg">
              <span class="card-title">Clash of Clans: Ride of the Hog Riders (Official TV Commercial)</span>
            </div>
            <div class="card-action">
            <center>
              <a href="https://www.youtube.com/watch?v=XH3Xu1-cvII"><i class="material-icons center">movie</i> Watch Now</a>
              
               </center>
            </div>
          </div>
        </div>
      </div>

        <div class="row">
        <div class="col s12 m12">
          <div class="card">
            <div class="card-image">
              <img src="https://1.bp.blogspot.com/-3PkAWpjGWIM/VuQ5I8-P6FI/AAAAAAAABC4/DOcx98kmyWQtXSWrInj7LZaGcPLRE8-yg/s1600/Snapshot%2B-%2B36.png">
              <span class="card-title">Clash of Clans: Larry (Official TV Commercial)</span>
            </div>
            <div class="card-action">
            <center>
              <a href="https://www.youtube.com/watch?v=Pz6vXH1LCvo"><i class="material-icons center">movie</i> Watch Now</a>
              
               </center>
            </div>
          </div>
        </div>
      </div>



        <div class="row">
        <div class="col s12 m12">
          <div class="card">
            <div class="card-image">
              <img src="http://s1.dmcdn.net/Iy8Rh.jpg">
              <span class="card-title">Clash of Clans: Revenge (Official Super Bowl TV Commercial)</span>
            </div>
            <div class="card-action">
            <center>
              <a href="https://www.youtube.com/watch?v=GC2qk2X3fKA"><i class="material-icons center">movie</i> Watch Now</a>
              
               </center>
            </div>
          </div>
        </div>
      </div>


        <div class="row">
        <div class="col s12 m12">
          <div class="card">
            <div class="card-image">
              <img src="https://i.ytimg.com/vi/AVP-4oWhWaQ/maxresdefault.jpg">
              <span class="card-title">Clash of Clans: WIZARDs (Movie)</span>
            </div>
            <div class="card-action">
            <center>
              <a href="https://www.youtube.com/watch?v=He1HS7hpBh4"><i class="material-icons center">movie</i> Watch Now</a>
              
               </center>
            </div>
          </div>
        </div>
      </div>





            



`;
  
    this.reRender(`
      ${html}
      `,document.getElementById("createBase"));
    $('#createBase').show();
    $('#cocList').hide();
    $('#cocView').hide();
    $('#cocRecent').hide(); 
    $('#cocVideos').hide();  
        $('#landingPage').hide();  

  

}


landingPage(){
  let html=`

  <video class="responsive-video" controls>
    <source src="img/Clash of Clans Hog Rider 360.mp4" type="video/mp4">
  </video>


  `;
   this.reRender(`
      ${html}
      `,document.getElementById("createBase"));
    $('#createBase').hide();
    $('#cocList').hide();
    $('#cocView').hide();
    $('#cocRecent').show(); 
    $('#cocVideos').hide();  
    $('#landingPage').hide();  

}


} 
let component = new Component();
component.baseLayout();