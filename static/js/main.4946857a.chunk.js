(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),s=a.n(r),i=(a(16),a(2)),o=a.n(i),l=a(5),m=a(6),d=a(7),p=a(9),h=a(8),u=a(10),w=a(1),f=a.n(w),v=function(e){return c.a.createElement("div",{className:"location-field-wrapper"},c.a.createElement("form",{className:"location-form",onSubmit:e.getWeather},c.a.createElement("input",{className:"location-input text-color",name:"city",type:"text",placeholder:"Enter City or Zip"}),c.a.createElement("button",{className:"location-submit text-color"},"Submit")))},E=function(){return c.a.createElement("div",{className:"current-weather-empty-wrapper"},c.a.createElement("p",{className:"current-weather-empty-text"},"Please enter a City or a ",c.a.createElement("br",null),"ZipCode to get the weather."))},g=function(e){return c.a.createElement("div",{className:"current-weather-wrapper hide"},c.a.createElement("div",{className:"current-location-container"},c.a.createElement("p",{className:"current-location text-color"},e.state.location)),c.a.createElement("div",{className:"date-container"},c.a.createElement("p",{className:"date text-color"},e.state.date)),c.a.createElement("div",{className:"weather-container"},c.a.createElement("div",{className:"weather-row1"},c.a.createElement("img",{className:"weather-icon",src:"https://openweathermap.org/img/wn/".concat(e.state.icon,"@2x.png"),alt:e.state.alt}),c.a.createElement("span",{className:"weather-temperature"},e.state.temp)),c.a.createElement("div",{className:"weather-row2"},c.a.createElement("span",{className:"high-low text-color"},e.state.hi,"\xb0/",e.state.low,"\xb0 "),c.a.createElement("span",{className:"feels text-color"},"Humidity: ",e.state.humidity,"%")),c.a.createElement("div",{className:"weather-row3"},c.a.createElement("span",{className:"condition text-color"},e.state.condition))))},y=function(e){return c.a.createElement("div",{className:"forecast-wrapper"},c.a.createElement("p",{className:"forecast-title text-color"},"5-Day Forecast"),c.a.createElement("div",{className:"forecast-container"},c.a.createElement("div",{className:"forecast-col forecast-col1"},c.a.createElement("div",{className:"forecast-day"},e.state.day1[0]),c.a.createElement("div",{className:"forecast-icon"},c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(e.state.day1[1],".png"),alt:"icon"})),c.a.createElement("div",{className:"forecast-temp"},e.state.day1[2],"\xb0")),c.a.createElement("div",{className:"forecast-col forecast-col2"},c.a.createElement("div",{className:"forecast-day"},e.state.day2[0]),c.a.createElement("div",{className:"forecast-icon"},c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(e.state.day2[1],".png"),alt:"icon"})),c.a.createElement("div",{className:"forecast-temp"},e.state.day2[2],"\xb0")),c.a.createElement("div",{className:"forecast-col forecast-col3"},c.a.createElement("div",{className:"forecast-day"},e.state.day3[0]),c.a.createElement("div",{className:"forecast-icon"},c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(e.state.day3[1],".png"),alt:"icon"})),c.a.createElement("div",{className:"forecast-temp"},e.state.day3[2],"\xb0")),c.a.createElement("div",{className:"forecast-col forecast-col4"},c.a.createElement("div",{className:"forecast-day"},e.state.day4[0]),c.a.createElement("div",{className:"forecast-icon"},c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(e.state.day4[1],".png"),alt:"icon"})),c.a.createElement("div",{className:"forecast-temp"},e.state.day4[2],"\xb0")),c.a.createElement("div",{className:"forecast-col forecast-col5"},c.a.createElement("div",{className:"forecast-day"},e.state.day5[0]),c.a.createElement("div",{className:"forecast-icon"},c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(e.state.day5[1],".png"),alt:"icon"})),c.a.createElement("div",{className:"forecast-temp"},e.state.day5[2],"\xb0"))))},N=function(e){return c.a.createElement("div",{className:"uvindex-wrapper"},c.a.createElement("div",{className:"uvindex-container"},c.a.createElement("div",{className:"uvindex-left"},c.a.createElement("p",{className:"uvindex-title"},"UV Index")),c.a.createElement("div",{className:"uvindex-right"},c.a.createElement("svg",{className:"uvindex-icon",fill:e.state.uvColor,width:"24",height:"24",viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("g",null,c.a.createElement("path",{d:"M64,30.34c-18.59,0-33.66,15.07-33.66,33.65c0,18.59,15.07,33.66,33.66,33.66 c18.59,0,33.66-15.07,33.66-33.66C97.66,45.41,82.59,30.34,64,30.34z"}),c.a.createElement("path",{d:"M56.76,24.21L56.76,24.21h14.49c0.67,0,1.29-0.33,1.68-0.88c0.38-0.54,0.47-1.25,0.24-1.88 L65.92,1.83c-0.3-0.81-1.06-1.34-1.92-1.34s-1.62,0.54-1.92,1.34l-7.25,19.63c-0.23,0.63-0.14,1.33,0.24,1.88 C55.46,23.89,56.09,24.21,56.76,24.21z"}),c.a.createElement("path",{d:"M97.26,40.99c0.38,0.39,0.91,0.6,1.44,0.6c0.12,0,0.24-0.01,0.36-0.03c0.66-0.12,1.21-0.55,1.5-1.16 l8.76-19.01c0.36-0.78,0.19-1.69-0.41-2.3c-0.61-0.61-1.53-0.77-2.31-0.42L87.6,27.44c-0.61,0.28-1.04,0.84-1.16,1.5 c-0.12,0.66,0.1,1.33,0.56,1.81L97.26,40.99z"}),c.a.createElement("path",{d:"M126.18,62.08l-19.64-7.24c-0.63-0.23-1.33-0.14-1.88,0.24c-0.55,0.38-0.87,1-0.87,1.67l0.01,14.49 c0,0.67,0.33,1.3,0.88,1.68c0.35,0.23,0.76,0.36,1.17,0.36c0.24,0,0.48-0.04,0.71-0.13l19.64-7.24c0.8-0.29,1.34-1.06,1.34-1.93 C127.52,63.14,126.99,62.38,126.18,62.08z"}),c.a.createElement("path",{d:"M100.56,87.6c-0.28-0.61-0.84-1.04-1.5-1.16c-0.66-0.11-1.34,0.1-1.8,0.57L87.01,97.26 c-0.47,0.47-0.69,1.15-0.57,1.81c0.12,0.65,0.55,1.22,1.16,1.5l19.01,8.76c0.27,0.13,0.56,0.18,0.86,0.18 c0.53,0,1.05-0.21,1.44-0.6c0.61-0.61,0.77-1.52,0.41-2.3L100.56,87.6z"}),c.a.createElement("path",{d:"M71.24,103.78L71.24,103.78l-14.49,0.01c-0.67,0-1.29,0.33-1.67,0.88 c-0.38,0.55-0.47,1.25-0.25,1.87l7.25,19.64c0.3,0.8,1.06,1.34,1.92,1.34s1.62-0.54,1.92-1.34l7.25-19.64 c0.23-0.63,0.14-1.33-0.24-1.88C72.54,104.11,71.92,103.78,71.24,103.78z"}),c.a.createElement("path",{d:"M30.74,87.01c-0.47-0.47-1.14-0.68-1.8-0.57c-0.66,0.12-1.22,0.55-1.5,1.16l-8.76,19.01 c-0.36,0.78-0.19,1.7,0.42,2.3c0.39,0.39,0.91,0.6,1.44,0.6c0.29,0,0.58-0.06,0.86-0.19l19.01-8.77c0.61-0.28,1.04-0.84,1.16-1.5 c0.12-0.66-0.1-1.33-0.57-1.8L30.74,87.01z"}),c.a.createElement("path",{d:"M22.17,73.29c0.41,0,0.82-0.13,1.17-0.37c0.55-0.38,0.88-1.01,0.88-1.68l-0.01-14.49 c0-0.67-0.33-1.29-0.88-1.68c-0.55-0.38-1.25-0.47-1.87-0.24L1.82,62.08c-0.8,0.29-1.34,1.06-1.34,1.92c0,0.85,0.53,1.62,1.34,1.92 l19.65,7.24C21.7,73.25,21.93,73.29,22.17,73.29z"}),c.a.createElement("path",{d:"M27.45,40.4c0.28,0.61,0.84,1.04,1.5,1.16c0.12,0.02,0.24,0.03,0.36,0.03c0.54,0,1.06-0.21,1.45-0.6 L41,30.74c0.47-0.48,0.68-1.15,0.56-1.81c-0.12-0.65-0.55-1.21-1.16-1.49l-19.02-8.76c-0.78-0.36-1.69-0.19-2.3,0.42 c-0.61,0.61-0.77,1.52-0.41,2.3L27.45,40.4z"}))),c.a.createElement("p",{className:"uvindex-level"},e.state.uvLevel))))},x=function(e){return c.a.createElement("div",{className:"details-wrapper"},c.a.createElement("p",{className:"daily-title text-color"},"Details"),c.a.createElement("div",{className:"details-container"},c.a.createElement("div",{className:"details-row"},c.a.createElement("div",{className:"details-icon-container"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 48 48"},c.a.createElement("path",{fill:"#FFEB3B",d:"M24,27c-6.077,0-11,4.923-11,11h22C35,31.923,30.076,27,24,27z"}),c.a.createElement("path",{fill:"#1976D2",d:"M3 38H45V42H3z"}),c.a.createElement("path",{fill:"#2196F3",d:"M26 13L26 18 22 18 22 13 18 13 24 6 30 13z"}))),c.a.createElement("div",{className:"details-title-container"},c.a.createElement("p",{className:"details-title"},"Sunrise: "),c.a.createElement("p",{className:"details-data"},e.state.sunrise))),c.a.createElement("div",{className:"details-row"},c.a.createElement("div",{className:"details-icon-container"},c.a.createElement("svg",{className:"sunset-icon",xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 48 48"},c.a.createElement("path",{fill:"#FF9800",d:"M24,27c-6.077,0-11,4.923-11,11h22C35,31.923,30.076,27,24,27z"}),c.a.createElement("path",{fill:"#1976D2",d:"M3 38H45V42H3z"}),c.a.createElement("path",{fill:"#2196F3",d:"M26 11L26 6 22 6 22 11 18 11 24 18 30 11z"}))),c.a.createElement("div",{className:"details-title-container"},c.a.createElement("p",{className:"details-title"},"Sunset: "),c.a.createElement("p",{className:"details-data"},e.state.sunset))),c.a.createElement("div",{className:"details-row"},c.a.createElement("div",{className:"details-icon-container"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 32 32"},c.a.createElement("path",{fill:"#fff",d:"M20,21.527V4.006C20,1.793,18.205,0,16,0c-2.209,0-4,1.787-4,4.006v17.521 c-1.228,1.099-2,2.696-2,4.473c0,3.312,2.687,6,6,6c3.312,0,6-2.688,6-6C22,24.223,21.229,22.626,20,21.527z M16,30 c-2.209,0-4-1.791-4-4c0-1.48,0.805-2.773,2-3.465V4.005C14,2.897,14.896,2,16,2c1.111,0,2,0.897,2,2.005v18.53 c1.195,0.691,2,1.984,2,3.465C20,28.209,18.209,30,16,30z"}),c.a.createElement("path",{fill:"red",d:"M16.986,23.166C16.996,23.115,17,23.062,17,23.009v-4.018C17,18.443,16.557,18,16,18 c-0.553,0-1,0.451-1,0.991v4.018c0,0.054,0.004,0.106,0.013,0.157C13.841,23.574,13,24.689,13,26c0,1.657,1.343,3,3,3s3-1.343,3-3 C19,24.689,18.159,23.574,16.986,23.166z"}))),c.a.createElement("div",{className:"details-title-container"},c.a.createElement("p",{className:"details-title"},"Pressure: "),c.a.createElement("p",{className:"details-data"},e.state.pressure," hPa"))),c.a.createElement("div",{className:"details-row"},c.a.createElement("div",{className:"details-icon-container"},c.a.createElement("svg",{fill:"#fff",width:"24",height:"24",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M30,14 C30,11.790861 28.2046438,10 26,10 C23.790861,10 22,11.7894101 22,14 L23,14 C23,12.3431458 24.3465171,11 26,11 C27.6568542,11 29,12.3465171 29,14 C29,15.6568542 27.6568766,17 25.9920699,17 L3,17 L3,18 L26.0015293,18 C28.2098237,18 30,16.2046438 30,14 L30,14 Z M21,13 C21,11.3431458 19.6534829,10 18,10 C16.3431458,10 15,11.3420576 15,12.991394 L15,13 L16,13 C16,11.8954305 16.8877296,11 18,11 C19.1045695,11 20,11.8877296 20,13 C20,14.1045695 19.1029399,15 17.9941413,15 L6,15 L6,16 L18.0005775,16 C19.6571128,16 21,14.6534829 21,13 L21,13 Z M25,21 C25,22.1045695 24.1122704,23 23,23 L23,23 C21.8954305,23 21,22.1052949 21,21.0057373 L21,21 L22,21 C22,21.5522847 22.4438648,22 23,22 L23,22 C23.5522847,22 24,21.5561352 24,21 L24,21 C24,20.4477153 23.5510798,20 22.992516,20 L9,20 L9,19 L23.0059397,19 C24.1072288,19 25,19.8877296 25,21 L25,21 L25,21 Z",id:"wind"}))),c.a.createElement("div",{className:"details-title-container wind-title-container"},c.a.createElement("p",{className:"details-title"},"WindSpeed: "),c.a.createElement("p",{className:"details-data"},e.state.wind," mph")))))},M="7a855810c99e704f7010b3933ae44bda",L=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={location:void 0,icon:"01d",alt:void 0,date:f()(new Date).format("dddd MMMM D h:mmA"),temp:void 0,hi:70,low:70,humidity:0,condition:void 0,uvColor:"green",uvLevel:"Low",day1:["Sun","01d","70"],day2:["Mon","01d","70"],day3:["Tue","01d","70"],day4:["Wed","01d","70"],day5:["Thu","01d","70"],sunrise:"6AM",sunset:"6PM",pressure:0,wind:0,timezone:void 0,error:void 0,userLat:void 0,userLon:void 0},a.isDay=function(e){var t=e.split(","),a=document.querySelector(".main-wrapper"),n=document.querySelectorAll(".text-color");return"12"===t[0]&&"AM"===t[1]?(a.classList.add("night-bg"),a.classList.remove("day-bg"),n.forEach((function(e){e.classList.add("text-night"),e.classList.remove("text-day")})),"night"):t[0]>=6&&t[0]<=11&&"PM"===t[1]||t[0]<=6&&"AM"===t[1]?(a.classList.add("night-bg"),a.classList.remove("day-bg"),n.forEach((function(e){e.classList.add("text-night"),e.classList.remove("text-day")})),"night"):(a.classList.add("day-bg"),a.classList.remove("night-bg"),n.forEach((function(e){e.classList.add("text-day"),e.classList.remove("text-night")})),"day")},a.getTimeZone=function(e){return e/3600},a.getUV=function(e){return e>=0&&e<3?["green","Low"]:e>=3&&e<6?["yellow","Moderate"]:e>=6&&e<8?["orange","High"]:e>=8&&e<11?["red","Very High"]:e>=11?["violet","Extreme"]:void 0},a.convertUTC=function(e,t){return f()(new Date(1e3*e)).utcOffset(t).format("h:mm A")},a.getForecast=function(e){return e.list.filter((function(e){return"15:00:00"===e.dt_txt.split(" ")[1]}))},a.getWeather=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c,r,s,i,l,m,d,p,h,u,w,v,E,g,y,N,x,L,C,z;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.preventDefault(),n=t.target.elements.city.value,c=new RegExp(/^\d{5}$/),r=new RegExp(/^[A-Za-z]+$/),s=document.querySelector(".current-weather-empty-wrapper"),i=document.querySelector(".current-weather-wrapper"),document.querySelector(".location-input").value="",!c.test(n)){e.next=33;break}return e.next=11,fetch("http://api.openweathermap.org/data/2.5/weather?zip=".concat(n,",us&APPID=").concat(M,"&units=imperial"));case 11:return l=e.sent,e.next=14,fetch("http://api.openweathermap.org/data/2.5/forecast?zip=".concat(n,",US&APPID=").concat(M,"&units=imperial"));case 14:return m=e.sent,e.next=17,l.json();case 17:return d=e.sent,e.next=20,m.json();case 20:return p=e.sent,e.next=23,fetch("http://api.openweathermap.org/data/2.5/uvi?appid=".concat(M,"&lat=").concat(d.coord.lat,"&lon=").concat(d.coord.lon));case 23:return h=e.sent,e.next=26,h.json();case 26:u=e.sent,w=f()().utcOffset(a.getTimeZone(d.timezone)).format("h,A"),a.isDay(w),v=a.getForecast(p),a.setState({location:d.name,icon:d.weather[0].icon,alt:d.weather[0].description,date:f()().utcOffset(a.getTimeZone(d.timezone)).format("dddd MMMM D h:mmA"),temp:Math.floor(d.main.temp),hi:Math.floor(d.main.temp_max),low:Math.floor(d.main.temp_min),humidity:Math.floor(d.main.humidity),condition:d.weather[0].description[0].toUpperCase()+d.weather[0].description.slice(1),uvColor:a.getUV(u.value)[0],uvLevel:a.getUV(u.value)[1],day1:[f()(new Date(v[0].dt_txt)).format("ddd"),v[0].weather[0].icon,Math.floor(v[0].main.temp)],day2:[f()(new Date(v[1].dt_txt)).format("ddd"),v[1].weather[0].icon,Math.floor(v[1].main.temp)],day3:[f()(new Date(v[2].dt_txt)).format("ddd"),v[2].weather[0].icon,Math.floor(v[2].main.temp)],day4:[f()(new Date(v[3].dt_txt)).format("ddd"),v[3].weather[0].icon,Math.floor(v[3].main.temp)],day5:[f()(new Date(v[4].dt_txt)).format("ddd"),v[4].weather[0].icon,Math.floor(v[4].main.temp)],sunrise:a.convertUTC(d.sys.sunrise,a.getTimeZone(d.timezone)),sunset:a.convertUTC(d.sys.sunset,a.getTimeZone(d.timezone)),pressure:d.main.pressure,wind:d.wind.speed,timezone:d.timezone}),e.next=59;break;case 33:if(!r.test(n)){e.next=58;break}return e.next=36,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&APPID=").concat(M,"&units=imperial"));case 36:return E=e.sent,e.next=39,fetch("http://api.openweathermap.org/data/2.5/forecast?q=".concat(n,"&APPID=").concat(M,"&units=imperial"));case 39:return g=e.sent,e.next=42,E.json();case 42:return y=e.sent,e.next=45,g.json();case 45:return N=e.sent,e.next=48,fetch("http://api.openweathermap.org/data/2.5/uvi?appid=".concat(M,"&lat=").concat(y.coord.lat,"&lon=").concat(y.coord.lon));case 48:return x=e.sent,e.next=51,x.json();case 51:L=e.sent,C=f()().utcOffset(a.getTimeZone(y.timezone)).format("h,A"),a.isDay(C),z=a.getForecast(N),a.setState({location:y.name,icon:y.weather[0].icon,alt:y.weather[0].description,date:f()().utcOffset(a.getTimeZone(y.timezone)).format("dddd MMMM D h:mmA"),temp:Math.floor(y.main.temp),hi:Math.floor(y.main.temp_max),low:Math.floor(y.main.temp_min),humidity:Math.floor(y.main.humidity),condition:y.weather[0].description[0].toUpperCase()+y.weather[0].description.slice(1),uvColor:a.getUV(L.value)[0],uvLevel:a.getUV(L.value)[1],day1:[f()(new Date(z[0].dt_txt)).format("ddd"),z[0].weather[0].icon,Math.floor(z[0].main.temp)],day2:[f()(new Date(z[1].dt_txt)).format("ddd"),z[1].weather[0].icon,Math.floor(z[1].main.temp)],day3:[f()(new Date(z[2].dt_txt)).format("ddd"),z[2].weather[0].icon,Math.floor(z[2].main.temp)],day4:[f()(new Date(z[3].dt_txt)).format("ddd"),z[3].weather[0].icon,Math.floor(z[3].main.temp)],day5:[f()(new Date(z[4].dt_txt)).format("ddd"),z[4].weather[0].icon,Math.floor(z[4].main.temp)],sunrise:a.convertUTC(y.sys.sunrise,a.getTimeZone(y.timezone)),sunset:a.convertUTC(y.sys.sunset,a.getTimeZone(y.timezone)),pressure:y.main.pressure,wind:y.wind.speed,timezone:y.timezone}),e.next=59;break;case 58:alert("Please enter a valid City or ZipCode.");case 59:s.classList.add("hide"),i.classList.remove("hide"),e.next=66;break;case 63:e.prev=63,e.t0=e.catch(0),alert("Please enter in a correct city name or zip!");case 66:case"end":return e.stop()}}),e,null,[[0,63]])})));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App main-wrapper"},c.a.createElement(v,{getWeather:this.getWeather}),c.a.createElement(E,null),c.a.createElement(g,{state:this.state}),c.a.createElement(y,{state:this.state}),c.a.createElement(N,{state:this.state}),c.a.createElement(x,{state:this.state}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.4946857a.chunk.js.map