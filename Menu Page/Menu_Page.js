let totalCost=0;

function Starters(){
  let starter_html = document.getElementById('menu-content');
  starter_html.innerHTML = `
    <div class="starter_container">
      <div class="starter-item">
        <button class="starters" onclick="Vegetarian_Starters();">🥟 Vegetarian Starters</button>
        <div id="veg-starters-content"></div>
      </div>
      <div class="starter-item">  
        <button class="starters" onclick="Non_Vegetarian_Starters();">🍗 Non-Vegetarian Starters</button>
        <div id="nonveg-starters-content"></div>
      </div>
      <div class="starter-item">  
        <button class="starters" onclick="Continental_Café_Style_Starters();">🌮 Continental & Café-Style Starters</button>
        <div id="continental-starters-content"></div>
      </div>
      <div class="starter-item">  
        <button class="starters" onclick="Indian_Traditional_Starters();">🌶️ Indian Traditional Starters</button>
        <div id="indian-starters-content"></div>
      </div>
      <div class="starter-item">  
        <button class="starters" onclick="Light_Healthy_Starters();">🥗 Light & Healthy Starters</button>
        <div id="healthy-starters-content"></div>
      </div>  
    </div>`;
}

function Main_Course() {
  let mainCourse_html = document.getElementById('menu-content'); 
  mainCourse_html.innerHTML = `
    <div class="mainCourse_container">
      <div class="mainCourse-item"> 
        <button class="mainCourse" onclick="Vegetarian_Main_Course();">🍛 Vegetarian Main Course</button>
        <div id="vegetarian-main-course-content"-content"></div>
      </div>
      <div class="mainCourse-item">   
        <button class="mainCourse" onclick="Non_Vegetarian_Main_Course();">🍗 Non-Vegetarian Main Course</button>
        <div id="non-vegetarian-main-course-content"></div>
      </div>  
        <div class="mainCourse-item"> 
        <button class="mainCourse" onclick="Rice_Biryani();">🍚 Rice & Biryani</button>
        <div id="rice-biryani-content"></div>
      </div>  
        <div class="mainCourse-item"> 
        <button class="mainCourse" onclick="Indian_Breads();">🫓 Indian Breads</button>
        <div id="indian-breads-content"></div>
      </div>  
        <div class="mainCourse-item"> 
        <button class="mainCourse" onclick="Continental_Chinese_Main_Course();">🍝 Continental / Chinese Main Course</button>
        <div id="continental-chinese-main-course-content"></div>
      </div>  
        <div class="mainCourse-item">  
        <button class="mainCourse" onclick="South_Indian_Main_Course();">🌯 South Indian Main Course</button>
        <div id="south-indian-main-course-content"></div>
      </div>  
        <div class="mainCourse-item"> 
        <button class="mainCourse" onclick="Light_Healthy_Main_Course();">🥗 Light & Healthy Main Course</button> 
        <div id="light-healthy-main-course-content"></div>
      </div>  
    </div>`;
}

function Drinks() {
  let drinks_html = document.getElementById('menu-content'); 
  drinks_html.innerHTML = `
    <div class="drinks_container">
      <div class="drinks-item"> 
        <button class="drinks" onclick="Non_Alcoholic_Beverages();">🧃 Non-Alcoholic Beverages</button>
        <div id="non-alcoholic-beverages-content"></div>
      </div>  
        <div class="drinks-item"> 
        <button class="drinks" onclick="Hot_Beverages();">☕ Hot Beverages</button>
        <div id="hot-beverages-content"></div>
      </div>   
        <div class="drinks-item"> 
        <button class="drinks" onclick="Mocktails_Special_Drinks();">🍹 Mocktails & Special Drinks</button>
        <div id="mocktails-special-drinks-content"></div>
      </div>   
        <div class="drinks-item"> 
        <button class="drinks" onclick="Alcoholic_Beverages();">🍷 Alcoholic Beverages</button>
        <div id="alcoholic-beverages-content"></div>
      </div>   
        <div class="drinks-item"> 
        <button class="drinks" onclick="Traditional_Regional_Drinks();">🧊 Traditional / Regional Drinks</button> 
        <div id="traditional-regional-drinks-content"></div>
      </div>   
    </div>`;
}

function Deserts() {
  let deserts_html = document.getElementById('menu-content'); 
  deserts_html.innerHTML = `
    <div class="deserts_container">
      <div class="deserts-item">
        <button class="deserts" onclick="Indian_Desserts();">🍨 Indian Desserts</button>
        <div id="indian-desserts-content"></div>
      </div>  
      <div class="deserts-item">  
        <button class="deserts" onclick="Cakes_Pastries();">🍰 Cakes & Pastries</button>
        <div id="cakes-pastries-content"></div>
      </div>   
      <div class="deserts-item">  
        <button class="deserts" onclick="Ice_Cream_Frozen_Desserts();">🍦 Ice Cream & Frozen Desserts</button>
        <div id="ice-cream-frozen-desserts-content"></div>
      </div>   
      <div class="deserts-item">  
        <button class="deserts" onclick="Continental_Café_Style_Desserts();">🥧 Continental & Café-Style Desserts</button>
        <div id="continental-café-style-desserts-content"></div>
      </div>   
      <div class="deserts-item">  
        <button class="deserts" onclick="Traditional_Light_Desserts();">🍮 Traditional & Light Desserts</button> 
        <div id="traditional-light-desserts-content"></div>
      </div>   
      <div class="deserts-item">  
        <button class="deserts" onclick="Fusion_Modern_Desserts();">🍬 Fusion & Modern Desserts</button>
        <div id="fusion-modern-desserts-content"></div>
      </div>    
    </div>`;
}

function Vegetarian_Starters() {
  let Vegetarian_Starters_html = document.getElementById('veg-starters-content');
  Vegetarian_Starters_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Vegetable Spring Rolls</label></td>
        <td>180</td>
        <td><button class="select" onclick="addToTotal(180)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Paneer Tikka Rolls</label></td>
        <td>220</td>
        <td><button class="select" onclick="addToTotal(220)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Crispy Corn</label></td>
        <td>170</td>
        <td><button class="select" onclick="addToTotal(170)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Hara Bhara Kebab</label></td>
        <td>200</td>
        <td><button class="select" onclick="addToTotal(200)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Cheese Balls</label></td>
        <td>210</td>
        <td><button class="select" onclick="addToTotal(210)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Veg Manchurian (Dry)</label></td>
        <td>190</td>
        <td><button class="select" onclick="addToTotal(190)">select</button></td>
      </tr>
      <tr>
        <td>7.</td>
        <td><label>Stuffed_Mushrooms</label></td>
        <td>230</td>
        <td><button class="select" onclick="addToTotal(230)">select</button></td>
      </tr>
      <tr>
        <td>8.</td>
        <td><label>Aloo Tikki / Potato Croquettes</label></td>
        <td>160</td>
        <td><button class="select" onclick="addToTotal(160)">select</button></td>
      </tr>
      <tr>
        <td>9.</td>
        <td><label>Chilli Paneer (Dry)</label></td>
        <td>240</td>
        <td><button class="select" onclick="addToTotal(240)">select</button></td>
      </tr>
      <tr>
        <td>10.</td>
        <td><label>Corn & Cheese Nuggets</label></td>
        <td>220</td>
        <td><button class="select" onclick="addToTotal(220)">select</button></td>
      </tr>
    </table>`;
}

function Non_Vegetarian_Starters() {
  let Non_Vegetarian_Starters_html = document.getElementById('nonveg-starters-content');
  Non_Vegetarian_Starters_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Chicken Tikka</label></td>
        <td>280</td>
        <td><button class="select" onclick="addToTotal(280)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Chicken 65</label></td>
        <td>260</td>
        <td><button class="select" onclick="addToTotal(260)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Chicken Lollipop</label></td>
        <td>300</td>
        <td><button class="select" onclick="addToTotal(300)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Fish Fingers / Fish Tikka</label></td>
        <td>320</td>
        <td><button class="select" onclick="addToTotal(320)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Prawn Tempura</label></td>
        <td>380</td>
        <td><button class="select" onclick="addToTotal(380)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Mutton Seekh Kebab</label></td>
        <td>350</td>
        <td><button class="select" onclick="addToTotal(350)">select</button></td>
      </tr>
      <tr>
        <td>7.</td>
        <td><label>Tandoori Chicken (Half)</label></td>
         <td>420</td>
        <td><button class="select" onclick="addToTotal(420)">select</button></td>
      </tr>
      <tr>
        <td>8.</td>
        <td><label>Chilli Chicken (Dry)</label></td>
        <td>270</td>
        <td><button class="select" onclick="addToTotal(270)">select</button></td>
      </tr>
      <tr>
        <td>9.</td>
        <td><label>Chicken Wings (BBQ / Spicy)</label></td>
        <td>290</td>
        <td><button class="select" onclick="addToTotal(290)">select</button></td>
      </tr>
    </table>`;
}

function Continental_Café_Style_Starters() {
  let Continental_Café_Style_Starters_html = document.getElementById('continental-starters-content');
  Continental_Café_Style_Starters_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Garlic Bread</label></td>
        <td>180</td>
        <td><button class="select" onclick="addToTotal(180)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Peri-Peri Fries</label></td>
        <td>160 </td>
        <td><button class="select" onclick="addToTotal(160)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Onion Rings</label></td>
        <td>170</td>
        <td><button class="select" onclick="addToTotal(170)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Nachos with Cheese & Salsa</label></td>
        <td>240</td>
        <td><button class="select" onclick="addToTotal(240)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Mozzarella Sticks</label></td>
        <td>260</td>
        <td><button class="select" onclick="addToTotal(260)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Loaded Potato Skins</label></td>
        <td>230</td>
        <td><button class="select" onclick="addToTotal(230)">select</button></td>
      </tr>
      <tr>
        <td>7.</td>
        <td><label>Bruschetta</label></td>
        <td>210</td>
        <td><button class="select" onclick="addToTotal(210)">select</button></td>
      </tr>
      <tr>
        <td>8.</td>
        <td><label>Chicken Nuggets</label></td>
        <td>250</td>
        <td><button class="select" onclick="addToTotal(250)">select</button></td>
      </tr>
    </table>`;
}

function Indian_Traditional_Starters() {
  let Indian_Traditional_Starters_html = document.getElementById('indian-starters-content');
  Indian_Traditional_Starters_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Samosa</label></td>
        <td>60</td>
        <td><button class="select" onclick="addToTotal(60)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Panner Pakora</label></td>
        <td>120</td>
        <td><button class="select" onclick="addToTotal(120)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Dahi Ke Kebab</label></td>
        <td>180</td>
        <td><button class="select" onclick="addToTotal(180)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label</label>Amritsari Fish</td>
        <td>260</td>
        <td><button class="select" onclick="addToTotal(260)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Aloo Chaat</label></td>
        <td>100</td>
        <td><button class="select" onclick="addToTotal(100)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Papdi Chaat</label></td>
        <td>110</td>
        <td><button class="select" onclick="addToTotal(110)">select</button></td>
      </tr>
    </table>`;
}

function Light_Healthy_Starters() {
  let Light_Healthy_Starters_html = document.getElementById('healthy-starters-content');
  Light_Healthy_Starters_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Green Salad</label></td>
        <td>120</td>
        <td><button class="select" onclick="addToTotal(120)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Fruit Salad</label></td>
        <td>140</td>
        <td><button class="select" onclick="addToTotal(140)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Soup (Tomato, Sweet Corn, Hot & Sour)</label></td>
        <td>130</td>
        <td><button class="select" onclick="addToTotal(130)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label</label>Grilled Veg Platter</td>
        <td>260</td>
        <td><button class="select" onclick="addToTotal(260)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Steamed Momos</label></td>
        <td>180</td>
        <td><button class="select" onclick="addToTotal(180)">select</button></td>
      </tr>
    </table>`;
}

function Vegetarian_Main_Course() {
  let Vegetarian_Main_Course_html = document.getElementById('vegetarian-main-course-content');
  Vegetarian_Main_Course_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Paneer Butter Masala</label></td>
        <td>260</td>
        <td><button class="select" onclick="addToTotal(260)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Shahi Paneer</label></td>
        <td>270</td>
        <td><button class="select" onclick="addToTotal(270)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Kadai Paneer</label></td>
        <td>250</td>
        <td><button class="select" onclick="addToTotal(250)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Palak Paneer</label></td>
        <td>240</td>
        <td><button class="select" onclick="addToTotal(240)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Mix Vegetable Curry</label></td>
        <td>220</td>
        <td><button class="select" onclick="addToTotal(220)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Malai Kofta</label></td>
        <td>260</td>
        <td><button class="select" onclick="addToTotal(260)">select</button></td>
      </tr>
      <tr>
        <td>7.</td>
        <td><label>Chole Masala</label></td>
        <td>210</td>
        <td><button class="select" onclick="addToTotal(210)">select</button></td>
      </tr>
      <tr>
        <td>8.</td>
        <td><label>Rajma Masala</label></td>
        <td>210</td>
        <td><button class="select" onclick="addToTotal(210)">select</button></td>
      </tr>
      <tr>
        <td>9.</td>
        <td><label>Dal Makhani</label></td>
        <td>230</td>
        <td><button class="select" onclick="addToTotal(230)">select</button></td>
      </tr>
      <tr>
        <td>10.</td>
        <td><label>Matar Mushroom</label></td>
        <td>240</td>
        <td><button class="select" onclick="addToTotal(240)">select</button></td>
      </tr>
    </table>`;
}

function Non_Vegetarian_Main_Course() {
  let Non_Vegetarian_Main_Course_html = document.getElementById('non-vegetarian-main-course-content');
  Non_Vegetarian_Main_Course_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Butter Chicken</label></td>
        <td>320</td>
        <td><button class="select" onclick="addToTotal(320)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Chicken Curry</label></td>
        <td>280</td>
        <td><button class="select" onclick="addToTotal(280)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Chicken Kadai</label></td>
        <td>290</td>
        <td><button class="select" onclick="addToTotal(290)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Chicken Chettinad</label></td>
        <td>300</td>
        <td><button class="select" onclick="addToTotal(300)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Mutton Rogan Josh</label></td>
        <td>380</td>
        <td><button class="select" onclick="addToTotal(380)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Mutton Curry</label></td>
        <td>360</td>
        <td><button class="select" onclick="addToTotal(360)">select</button></td>
      </tr>
      <tr>
        <td>7.</td>
        <td><label>Fish Curry</label></td>
        <td>340</td>
        <td><button class="select" onclick="addToTotal(340)">select</button></td>
      </tr>
      <tr>
        <td>8.</td>
        <td><label>Prawn Masala</label></td>
        <td>420</td>
        <td><button class="select" onclick="addToTotal(420)">select</button></td>
      </tr>
      <tr>
        <td>9.</td>
        <td><label>Egg Curry</label></td>
        <td>200</td>
        <td><button class="select" onclick="addToTotal(200)">select</button></td>
      </tr>
    </table>`;
}

function Rice_Biryani() {
  let Rice_Biryani_html = document.getElementById('rice-biryani-content');
  Rice_Biryani_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Veg Biryani</label></td>
        <td>220</td>
        <td><button class="select" onclick="addToTotal(220)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Chicken Biryani</label></td>
        <td>280</td>
        <td><button class="select" onclick="addToTotal(280)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Mutton Biryani</label></td>
        <td>360</td>
        <td><button class="select" onclick="addToTotal(360)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Jeera Rice</label></td>
        <td>160</td>
        <td><button class="select" onclick="addToTotal(160)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Veg Pulao</label></td>
        <td>180</td>
        <td><button class="select" onclick="addToTotal(180)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Steamed Rice</label></td>
        <td>140</td>
        <td><button class="select" onclick="addToTotal(140)">select</button></td>
      </tr>
      <tr>
        <td>7.</td>
        <td><label>Egg Fried Rice</label></td>
        <td>200</td>
        <td><button class="select" onclick="addToTotal(200)">select</button></td>
      </tr>
    </table>`;
}

function Indian_Breads() {
  let Indian_Breads_html = document.getElementById('indian-breads-content');
  Indian_Breads_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Tandoori Roti</label></td>
        <td>25</td>
        <td><button class="select" onclick="addToTotal(25)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Butter Roti</label></td>
        <td>30</td>
        <td><button class="select" onclick="addToTotal(30)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Plain Naan</label></td>
        <td>50</td>
        <td><button class="select" onclick="addToTotal(50)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Butter Naan</label></td>
        <td>60</td>
        <td><button class="select" onclick="addToTotal(60)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Garlic Naan</label></td>
        <td>70</td>
        <td><button class="select" onclick="addToTotal(70)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Lachha Paratha</label></td>
        <td>55</td>
        <td><button class="select" onclick="addToTotal(55)">select</button></td>
      </tr>
      <tr>
        <td>7.</td>
        <td><label>Missi Roti</label></td>
        <td>45</td>
        <td><button class="select" onclick="addToTotal(45)">select</button></td>
      </tr>
    </table>`;
}

function Continental_Chinese_Main_Course() {
  let Continental_Chinese_Main_Course_html = document.getElementById('continental-chinese-main-course-content');
  Continental_Chinese_Main_Course_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Veg Hakka Noodles</label></td>
        <td>200</td>
        <td><button class="select" onclick="addToTotal(200)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Chicken Hakka Noodles</label></td>
        <td>240</td>
        <td><button class="select" onclick="addToTotal(240)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Veg Fried Rice</label></td>
        <td>190</td>
        <td><button class="select" onclick="addToTotal(190)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Chicken Fried Rice</label></td>
        <td>230</td>
        <td><button class="select" onclick="addToTotal(230)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Veg Schezwan Noodles</label></td>
        <td>210</td>
        <td><button class="select" onclick="addToTotal(210)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Kung Pao Chicken</label></td>
        <td>320</td>
        <td><button class="select" onclick="addToTotal(320)">select</button></td>
      </tr>
      <tr>
        <td>7.</td>
        <td><label>Sweet & Sour Chicken</label></td>
        <td>300</td>
        <td><button class="select" onclick="addToTotal(300)">select</button></td>
      </tr>
      <tr>
        <td>8.</td>
        <td><label>Thai Green Curry</label></td>
        <td>280</td>
        <td><button class="select" onclick="addToTotal(280)">select</button></td>
      </tr>
    </table>`;
}

function South_Indian_Main_Course() {
  let South_Indian_Main_Course_html = document.getElementById('south-indian-main-course-content');
  South_Indian_Main_Course_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Masala Dosa</label></td>
        <td>150</td>
        <td><button class="select" onclick="addToTotal(150)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Plain Dosa</label></td>
        <td>120</td>
        <td><button class="select" onclick="addToTotal(120)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Idli Sambar</label></td>
        <td>100</td>
        <td><button class="select" onclick="addToTotal(100)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Uttapam</label></td>
        <td>140</td>
        <td><button class="select" onclick="addToTotal(140)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Veg Kurma with Appam</label></td>
        <td>180</td>
        <td><button class="select" onclick="addToTotal(180)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Lemon Rice</label></td>
        <td>110</td>
        <td><button class="select" onclick="addToTotal(110)">select</button></td>
      </tr>
      <tr>
        <td>7.</td>
        <td><label>Curd Rice</label></td>
        <td>120</td>
        <td><button class="select" onclick="addToTotal(120)">select</button></td>
      </tr>
    </table>`;
}

function Light_Healthy_Main_Course() {
  let Light_Healthy_Main_Course_html = document.getElementById('light-healthy-main-course-content');
  Light_Healthy_Main_Course_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Grilled Paneer with Veggies</label></td>
        <td>280</td>
        <td><button class="select" onclick="addToTotal(280)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Grilled Chicken</label></td>
        <td>320</td>
        <td><button class="select" onclick="addToTotal(320)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Quinoa Veg Bowl</label></td>
        <td>260</td>
        <td><button class="select" onclick="addToTotal(260)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Stir-Fried Vegetables</label></td>
        <td>220</td>
        <td><button class="select" onclick="addToTotal(220)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Brown Rice & Dal</label></td>
        <td>210</td>
        <td><button class="select" onclick="addToTotal(210)">select</button></td>
      </tr>
    </table>`;
}

function Non_Alcoholic_Beverages() {
  let Vegetarian_Starters_html = document.getElementById('non-alcoholic-beverages-content');
  Vegetarian_Starters_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Mineral Water</label></td>
        <td>40</td>
        <td><button class="select" onclick="addToTotal(40)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Fresh Lime Soda</label></td>
        <td>70</td>
        <td><button class="select" onclick="addToTotal(70)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Cold Drinks (Coke, Pepsi, Sprite, Fanta)</label></td>
        <td>50</td>
        <td><button class="select" onclick="addToTotal(50)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Iced Tea (Lemon / Peach)</label></td>
        <td>120</td>
        <td><button class="select" onclick="addToTotal(120)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Cold Coffee</label></td>
        <td>140</td>
        <td><button class="select" onclick="addToTotal(140)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Milkshakes (Chocolate, Vanilla, Strawberry, Mango)</label></td>
        <td>160</td>
        <td><button class="select" onclick="addToTotal(160)">select</button></td>
      </tr>
      <tr>
        <td>7.</td>
        <td><label>Mocktails (Virgin Mojito, Blue Lagoon, Fruit Punch)</label></td>
        <td>180</td>
        <td><button class="select" onclick="addToTotal(180)">select</button></td>
      </tr>
      <tr>
        <td>8.</td>
        <td><label>Fresh Juices (Orange, Pineapple, Watermelon, Apple)</label></td>
        <td>130</td>
        <td><button class="select" onclick="addToTotal(130)">select</button></td>
      </tr>
      <tr>
        <td>9.</td>
        <td><label>Buttermilk / Lassi (Sweet / Salted / Mango)</label></td>
        <td>70</td>
        <td><button class="select" onclick="addToTotal(70)">select</button></td>
      </tr>
    </table>`;
}

function Hot_Beverages() {
  let Hot_Beverages_html = document.getElementById('hot-beverages-content');
  Hot_Beverages_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Tea (Masala / Lemon / Green)"Tea (Masala / Lemon / Green)</label></td>
        <td>60</td>
        <td><button class="select" onclick="addToTotal(60)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Coffee (Espresso, Cappuccino, Latte)</label></td>
        <td>120</td>
        <td><button class="select" onclick="addToTotal(120)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Hot Chocolate</label></td>
        <td>150</td>
        <td><button class="select" onclick="addToTotal(150)">select</button></td>
      </tr>
    </table>`;
}

function Mocktails_Special_Drinks() {
  let Mocktails_Special_Drinks_html = document.getElementById('mocktails-special-drinks-content');
  Mocktails_Special_Drinks_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Virgin Mojito</label></td>
        <td>180</td>
        <td><button class="select" onclick="addToTotal(180)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Blue Lagoon</label></td>
        <td>190</td>
        <td><button class="select" onclick="addToTotal(190)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Watermelon Cooler</label></td>
        <td>170</td>
        <td><button class="select" onclick="addToTotal(170)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Mint Lemonade</label></td>
        <td>160</td>
        <td><button class="select" onclick="addToTotal(160)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Strawberry Fizz</label></td>
        <td>190</td>
        <td><button class="select" onclick="addToTotal(190)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Kiwi Cooler</label></td>
        <td>200</td>
        <td><button class="select" onclick="addToTotal(200)">select</button></td>
      </tr>
    </table>`;
}

function Alcoholic_Beverages() {
  let Alcoholic_Beverages_html = document.getElementById('alcoholic-beverages-content');
  Alcoholic_Beverages_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Red Wine</label></td>
        <td>500</td>
        <td><button class="select" onclick="addToTotal(500)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>White Wine</label></td>
        <td>500</td>
        <td><button class="select" onclick="addToTotal(500)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Rosé</label></td>
        <td>550</td>
        <td><button class="select" onclick="addToTotal(550)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Whisky</label></td>
        <td>600</td>
        <td><button class="select" onclick="addToTotal(600)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Vodka</label></td>
        <td>550</td>
        <td><button class="select" onclick="addToTotal(550)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Margarita</label></td>
        <td>450</td>
        <td><button class="select" onclick="addToTotal(450)">select</button></td>
      </tr>
      <tr>
        <td>7.</td>
        <td><label>Mojito</label></td>
        <td>400</td>
        <td><button class="select" onclick="addToTotal(400)">select</button></td>
      </tr>
      <tr>
        <td>8.</td>
        <td><label>Cosmopolitan</label></td>
        <td>450</td>
        <td><button class="select" onclick="addToTotal(450)">select</button></td>
      </tr>
      <tr>
        <td>9.</td>
        <td><label>Bloody Mary</label></td>
        <td>500</td>
        <td><button class="select" onclick="addToTotal(500)">select</button></td>
      </tr>
      <tr>
        <td>10.</td>
        <td><label>Long Island Iced Tea</label></td>
        <td>600</td>
        <td><button class="select" onclick="addToTotal(600)">select</button></td>
      </tr>
    </table>`;
}

function Traditional_Regional_Drinks() {
  let Traditional_Regional_Drinks_html = document.getElementById('traditional-regional-drinks-content');
  Traditional_Regional_Drinks_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Jaljeera</label></td>
        <td>80</td>
        <td><button class="select" onclick="addToTotal(80)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Thandai</label></td>
        <td>120</td>
        <td><button class="select" onclick="addToTotal(120)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Aam Panna</label></td>
        <td>100</td>
        <td><button class="select" onclick="addToTotal(100)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Sugarcane Juice</label></td>
        <td>90</td>
        <td><button class="select" onclick="addToTotal(90)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Kokum Sharbat</label></td>
        <td>100</td>
        <td><button class="select" onclick="addToTotal(100)">select</button></td>
      </tr>
    </table>`;
}

function Indian_Desserts() {
  let Indian_Desserts_html = document.getElementById('indian-desserts-content');
  Indian_Desserts_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Gulab Jamun</label></td>
        <td>120</td>
        <td><button class="select" onclick="addToTotal(120)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Rasgulla</label></td>
        <td>130</td>
        <td><button class="select" onclick="addToTotal(130)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Rasmalai</label></td>
        <td>150</td>
        <td><button class="select" onclick="addToTotal(150)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Kheer (Rice / Vermicelli)</label></td>
        <td>140</td>
        <td><button class="select" onclick="addToTotal(140)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Gajar Ka Halwa</label></td>
        <td>160</td>
        <td><button class="select" onclick="addToTotal(160)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Moong Dal Halwa</label></td>
        <td>180</td>
        <td><button class="select" onclick="addToTotal(180)">select</button></td>
      </tr>
      <tr>
        <td>7.</td>
        <td><label>Jalebi (with Rabri)</label></td>
        <td>150</td>
        <td><button class="select" onclick="addToTotal(150)">select</button></td>
      </tr>
      <tr>
        <td>8.</td>
        <td><label>Shrikhand</label></td>
        <td>140</td>
        <td><button class="select" onclick="addToTotal(140)">select</button></td>
      </tr>
      <tr>
        <td>9.</td>
        <td><label>Malpua</label></td>
        <td>160</td>
        <td><button class="select" onclick="addToTotal(160)">select</button></td>
      </tr>
    </table>`;
}

function Cakes_Pastries() {
let Cakes_Pastries_html = document.getElementById('cakes-pastries-content');
  Cakes_Pastries_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Chocolate Truffle Cake</label></td>
        <td>250</td>
        <td><button class="select" onclick="addToTotal(250)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Black Forest Cake</label></td>
        <td>240</td>
        <td><button class="select" onclick="addToTotal(240)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Red Velvet Cake</label></td>
        <td>260</td>
        <td><button class="select" onclick="addToTotal(260)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Pineapple Pastry</label></td>
        <td>220</td>
        <td><button class="select" onclick="addToTotal(220)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Cheesecake (Classic / Blueberry / Strawberry)</label></td>
        <td>280</td>
        <td><button class="select" onclick="addToTotal(280)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Brownie with Ice Cream</label></td>
        <td>300</td>
        <td><button class="select" onclick="addToTotal(300)">select</button></td>
      </tr>
      <tr>
    </table>`;
}

function Ice_Cream_Frozen_Desserts() {
  let Ice_Cream_Frozen_Desserts_html = document.getElementById('ice-cream-frozen-desserts-content');
  Ice_Cream_Frozen_Desserts_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Vanilla / Chocolate / Strawberry</label></td>
        <td>120</td>
        <td><button class="select" onclick="addToTotal(120)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Mango Ice Cream</label></td>
        <td>140</td>
        <td><button class="select" onclick="addToTotal(140)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Butterscotch Ice Cream</label></td>
        <td>140</td>
        <td><button class="select" onclick="addToTotal(140)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Sundaes</label></td>
        <td>180</td>
        <td><button class="select" onclick="addToTotal(180)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Kulfi (Malai / Pista / Mango)</label></td>
        <td>150</td>
        <td><button class="select" onclick="addToTotal(150)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Ice Cream with Hot Chocolate Sauce</label></td>
        <td>200</td>
        <td><button class="select" onclick="addToTotal(200)">select</button></td>
      </tr>
    </table>`;
}

function Continental_Café_Style_Desserts() {
  let Continental_Café_Style_Desserts_html = document.getElementById('continental-café-style-desserts-content');
  Continental_Café_Style_Desserts_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Apple Pie</label></td>
        <td>180</td>
        <td><button class="select" onclick="addToTotal(180)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Tiramisu</label></td>
        <td>220</td>
        <td><button class="select" onclick="addToTotal(220)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Crème Brûlée</label></td>
        <td>240</td>
        <td><button class="select" onclick="addToTotal(240)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Chocolate Mousse</label></td>
        <td>200</td>
        <td><button class="select" onclick="addToTotal(200)">select</button></td>
      </tr>
      <tr>
        <td>5.</td>
        <td><label>Waffles with Ice Cream</label></td>
        <td>260</td>
        <td><button class="select" onclick="addToTotal(260)">select</button></td>
      </tr>
      <tr>
        <td>6.</td>
        <td><label>Pancakes with Honey / Chocolate</label></td>
        <td>220</td>
        <td><button class="select" onclick="addToTotal(220)">select</button></td>
      </tr>
      <tr>
    </table>`;
}

function Traditional_Light_Desserts() {
  let Traditional_Light_Desserts_html = document.getElementById('traditional-light-desserts-content');
  Traditional_Light_Desserts_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Fruit Custard</label></td>
        <td>150</td>
        <td><button class="select" onclick="addToTotal(150)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Fresh Fruit Bowl</label></td>
        <td>140</td>
        <td><button class="select" onclick="addToTotal(140)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Caramel Custard</label></td>
        <td>160</td>
        <td><button class="select" onclick="addToTotal(160)">select</button></td>
      </tr>
    </table>`;
}

function Fusion_Modern_Desserts() {
  let Fusion_Modern_Desserts_html = document.getElementById('fusion-modern-desserts-content');
  Fusion_Modern_Desserts_html.innerHTML = `
    <table border="1">
      <tr>
        <th>Sr No.</th>
        <th>Options</th>
        <th>Price (₹)</th>
        <th>Selection</th>
      </tr>
      <tr>
        <td>1.</td>
        <td><label>Chocolate Samosa</label></td>
        <td>150</td>
        <td><button class="select" onclick="addToTotal(150)">select</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td><label>Gulab Jamun Cheesecake</label></td>
        <td>220</td>
        <td><button class="select" onclick="addToTotal(220)">select</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td><label>Oreo Dessert Cup</label></td>
        <td>200</td>
        <td><button class="select" onclick="addToTotal(200)">select</button></td>
      </tr>
      <tr>
        <td>4.</td>
        <td><label>Churros with Chocolate Dip</label></td>
        <td>180</td>
        <td><button class="select" onclick="addToTotal(180)">select</button></td>
      </tr>
    </table>`;
}

function addToTotal(price) {
  totalCost += price;
  document.getElementById("totalCost").innerText =
    "Total Cost: ₹" + totalCost;
}