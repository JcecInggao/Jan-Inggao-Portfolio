const mySidenav = document.getElementById("mySidenav")

const openNav = document.getElementById("mySidenav").addEventListener('mouseover', function(){
 mySidenav.style.width = "250px";
 mySidenav.style.height = "250px";
 mySidenav.style.backgroundColor = "transparent";
});

const closeNav = document.getElementById("mySidenav").addEventListener('mouseleave', function(){
  mySidenav.style.width = "50px";
  mySidenav.style.height = "50px";
  mySidenav.style.backgroundColor = "#0e0d1c";
});
