@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box- sizing: border - box;
scroll - behavior: smooth;
}
a{
    text - decoration: none;
    color: #fff;
    transition: 0.3s;
}
ul{
    list - style: none;
}
img{
    max - width: 100 %;
}
body{
    font - family: 'Lexend', sans - serif;
    font - size: 16px;
    line - height: 24px;
    background - color:#202020;
}
.container{
    width: 1170px;
    margin: auto;
}




      /*---------------------------Header---------------------------*/

.header - area{
    padding: 25px 0;
    transition: padding .3s;
}

.header - area.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100 %;
    z - index: 99;
    background - color: #202020;
    padding: 5px;
}

.header{
    display: flex;
    justify - content: space - between;
    align - items: center;
    /* padding-bottom: 2rem; */
} 
.logo {
    display: flex;
    align - items: center;
    position: relative;
    text - transform: uppercase;
    font - size: 26px;
    font - weight: 700;
}

.logo.fa - bolt {
    color: #fed700;
    font - size: 19.5px;
    position: absolute;
    top: 60 %;
    left: 100 %;
    transform: translate(-50 %, -50 %);
    z - index: 1;
}

.signature {
    width: 100px;
    height: auto;
    margin - right: 10px;
}

.header ul li: first - child {
    margin - right: auto;
}  

.header ul{
    display: flex;
    align - items: center;
}
.header ul li{
    margin: 0 15px;
}
.header ul li a{
    text - transform: capitalize;
    display: block;
}
.header ul li a.active{
    color: #fed700;
} 
.header ul li a:hover{
    color: #fed700;
}
.header.menu_icon{
    color: #fff;
    font - size: 18px;
    cursor: pointer;
    display: none;
}


/*---------------------------HomePage--------------------------*/

.FirstElement{
    display: flex;
    justify - content: space - around;
    align - items: center;
    padding - top: 5rem;
} 

.FirstElement.adjusted - padding {
    padding - top: 40px;
}

.FirstElement.profile - photo{
    width: 300px;
    height: 300px;
    border - radius: 50 %;
    overflow: hidden;
    border: 15px solid #444444;
    box - shadow: 5px 7px 25px rgba(0, 0, 0, 0.5)
}
profile - photo.img{
    height: 100 %;
    width: 100 %;
    transition: 0.5s;
}
.FirstElement.profile - photo img:hover{
    transform: scale(1.2);
}
.profile - text{
    max - width: 750px;
    display: flex;
    flex - direction: column;
}
.profile - text h5{
    color: #e5e5e5;
    font - size: 14px;
}
.profile - text h1{
    color: #fed700;
    font - size: 3rem;
}
.profile - text p{
    color: #e5e5e5;
}
.profile - text.social i{
    color: #e5e5e5;
    font - size: 18px;
    margin - right: 10px;
    transition: 0.5s;
}
.profile - text.social i:hover{
    color: #fed700;
    transform: rotate(360deg);
}



 /*---------------------------About---------------------------*/

.about - area{
    padding - top: 130px;
    background - color: #202020;
}
.about{
    display: flex;
    justify - content: space - between;
    align - items: center;
    margin - bottom: 50px;
}
.about - content{
    flex - basis: 60 %;
}
.about - content h4{
    color: #fed700;
    font - size: 40px;
    line - height: 70px;
    text - transform: capitalize;
}
.about - content ul {
    color: #fff;
    text - align: justify;
}

.about - content ul li {
    list - style - type: disc;
    margin - bottom: 10px;
}

.about - skills{
    flex - basis: 35 %;
}
.about - skills ul li{
    border - bottom: 1px dashed #ddd;
    padding - bottom: 10px;
    margin - bottom: 10px;
    color: #fff;
    font - size: 18px;
}
.about - skills ul li: last - child{
    border - bottom: 0;
    padding - bottom: 0;
    margin - bottom: 0;
}


/*---------------------------Button---------------------------*/

.btn - group{
    margin: 45px 0;
}
.btn - group.btn{
    border - color: #d5d5d5;
    color: #fff;
    background - color: #333;
    padding: 12px 25px;
    margin: 5px 0;
    margin - right: 7px;
    border - radius: 30px;
    border: 2px solid #e5e5e5;
    box - shadow: 0 10px 10px - 8px rgb(0 0 0 / 78 %);
}
.btn.active{
    border - color: #fed700;
}


/*---------------------------Education & Internship---------------------------*/

.education - content.row{
    display: flex;
    border - radius: 5px;
    height: 400px;
    margin - bottom: 250px;
}

.education - content.title{
    color: #fed700;
}
.education - content.row.education,
.education - content.row.Achievements
{
    color: #e5e5e5;
    flex: 0 0 50 %;
    max - width: 50 %;
    margin - top: 30px;
} 
.education - content  h3.title{
    font - size: 24px;
    margin - bottom: 30px;
    font - weight: 700;
}
.education - content.row.timeline - box{
    flex: 0 0 100 %;
    max - width: 100 %;
}
.education - content.row.timeline{
    /* background-color:#e5e5e5; */
    padding: 30px 15px;
    border: 1px solid #e5e5e5;
    border - radius: 10px;
    width: 100 %;
    position: relative;
}
.education - content.row.timeline - item{
    position: relative;
    padding - left: 37px;
    padding - bottom: 50px;
}
.education - content.row.Achievements.timeline - item{
    position: relative;
    padding - left: 37px;
    padding - bottom: 30px;
}
.education - content.row.timeline - item: last - child{
    padding - bottom: 0;
}
.education - content.row.timeline - item::before{
    content: "";
    width: 1px;
    position: absolute;
    height: 100 %;
    left: 7px;
    top: 0;
    background - color: #fed700;
}
.education - content.row.circle - dot{
    position: absolute;
    left: 0;
    top: 0;
    height: 15px;
    width: 15px;
    border - radius: 50 %;
    background - color: #e5e5e5;
}
.education - content.row.timeline - title  {
    font - weight: 700;
    font - size: 18px;
    margin - bottom: 12px;
}
.education - content.row.Achievements.timeline - title  {
    font - weight: 700;
    font - size: 18px;
    margin - bottom: 8px;
}
.education - content.row.timeline - text{
    line - height: 25px;
    font - size: 16px;
    text - align: justify;
}



/*---------------------------Projects---------------------------*/
.project - content{
    padding: 90px 0;
    /* color:#fff;  */
}
.project - title{
    margin - bottom: 60px;
    text - align: center;
}
.project - title h4{
    text - transform: uppercase;
    font - size: 40px;
    line - height: 40px;
    color: #fed700;
    margin - bottom: 20px;
}
.project - title p{
    color: #e5e5e5;
}
.projects{
    display: flex;
    justify - content: space - between;
    flex - wrap: wrap;
}
.project{
    /* padding: 30px 15px; */
    color: #e5e5e5;
    border: 2px solid #e5e5e5;
    border - radius: 10px;
    width: 100 %;
    position: relative;
    padding: 25px;
    text - align: center;
    flex - basis: 32 %;
    transition: .3s;
}
.project i{
    background - color: #fed700;
    width: 60px;
    height: 60px;
    color: #333;
    font - size: 26px;
    line - height: 60px;
    border - radius: 50 %;
}
.project h4{
    font - size: 26px;
    text - transform: capitalize;
    margin: 20px 0;
}
.project p{
    text - align: justify;
}
.project:hover{
    border - color: #fed700;
}



/*---------------------------Contact Me---------------------------*/
.contact - content{
    padding: 100px 0;
    color: #fff;
    text - align: center;
}
.contact - content.contact - title h4{
    font - size: 40px;
    text - transform: capitalize;
    color: #fed700;
    padding - bottom: 10px;
}
.contact - content.contact - title p{
    padding - bottom: 20px;
}
.contact{
    max - width: 700px;
    margin: auto;
}
.contact input,.contact textarea{
    width: 100 %;
    padding: 15px;
    border: 0;
    margin - bottom: 10px;
}

.contact.submit{
    width: auto;
    background - color: #fed700;
    padding: 10px 40px;
    font - weight: bold;
    font - size: 18px;
}
.contact.submit:hover{
    transform: scale(1.1);
    cursor: pointer;
}
#msg{
    color: #fff;
    font - size: 20px;
    margin - top: -8px;
    display: block;
}






/*---------------------------Footer---------------------------*/
.footer {
    max - width: 950px;
    margin: 0 auto;
    padding: 15px 0 26px;
    border - top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.4);
    display: flex;
    flex - direction: column;
    align - items: center;
    text - align: center;
}
  .footer.message {
    font - size: 12px;
    color: rgba(255, 255, 255, 0.4);
    margin - bottom: 10px;
}
  
  .copyright {
    font - size: 12px;
}




/*------------------- Responsive Design on small screen -------------------*/

/* Medium layout */
@media only screen and(min - width: 1000px) and(max - width: 1200px){
  .container{
        width: 970px;
    }
}

@media(max - width: 1050px) {
  .FirstElement{
        flex - direction: column;
        padding - top: 2rem;
    }
  .profile - text{
        padding: 40px 0px;
    }
}



/* tablet layout */
@media only screen and(min - width: 768px) and(max - width: 999px){
  .container{
        width: 750px;
    }
}


/* Mobile Layout */
@media only screen and(max - width: 767px){
  .container{
        width: 350px;
    }

  .header.menu_icon {
        display: block;
    }
  .header ul{
        display: none;
    }
  .header i{
        color: #e5e5e5;
    }

  .profile - text{
        width: 350px;
    }
  .FirstElement.profile - text p{
        text - align: justify;
    }
  .about{
        flex - direction: column;
        flex - basis: 100 %;
        margin - bottom: 30px;
    }
  .about - skills{
        width: 100 %;
        margin - top: 30px;
    }
  .education - content.row {
        flex - direction: column;
        height: auto;
        margin - bottom: 50px;
    }

  .education - content.row.education,
  .education - content.row.Achievements {
        flex - basis: 100 %;
        max - width: 100 %;
        margin - top: 30px;
    }
  .project{
        flex - basis: 100 %;
        margin - bottom: 30px;
    }

}