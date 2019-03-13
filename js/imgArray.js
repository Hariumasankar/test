/* Load All Images in Single araay for PreLoader purpose */
var imgArr = [
    "assets/images/shell/cart-48.png",
    "assets/images/shell/back-48.png",
    "assets/images/shell/home-48.png",
    "assets/images/shell/trophy.png",
    "assets/images/shell/tryagain.png",
    "assets/images/shell/unlock.png",
    "assets/images/shell/lock.png",
    "assets/images/shell/wrong.png",
    "assets/images/shell/tick.png",

    "assets/images/assessment/ans_img/sem1/test1/Ques332/q2_option_1.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q2_option_2.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q2_option_3.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q2_option_4.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q3_option_1.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q3_option_2.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q3_option_3.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q3_option_4.JPG",
    "assets/images/assessment/ques_img/sem1/test1/Q3_ques.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q4_option_1.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q4_option_2.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q4_option_3.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q4_option_4.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q10_option_1.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q10_option_2.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q10_option_3.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q10_option_4.JPG",
    "assets/images/assessment/ques_img/sem1/test1/Q10_ques.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q11_option_1.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q11_option_2.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q11_option_3.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q11_option_4.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q12_option_1.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q12_option_2.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q12_option_3.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q12_option_4.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q13_option_1.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q13_option_2.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q13_option_3.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q13_option_4.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q16_option_1.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q16_option_2.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q16_option_3.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q16_option_4.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q17_option_1.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q17_option_2.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q17_option_3.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q17_option_4.JPG",
    "assets/images/assessment/ques_img/sem1/test1/Q17_ques.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q18_option_1.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q18_option_2.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q18_option_3.JPG",
    "assets/images/assessment/ans_img/sem1/test1/Ques332/q18_option_4.JPG",

    "assets/images/assessment/ques_img/sem1/test2/q1.jpg",
    "assets/images/assessment/ques_img/sem1/test2/q2.jpg",
    "assets/images/assessment/ques_img/sem1/test2/q3.jpg",
    "assets/images/assessment/ques_img/sem1/test2/q4.jpg",
    "assets/images/assessment/ans_img/sem1/test2/ans_a.jpg",
    "assets/images/assessment/ans_img/sem1/test2/ans_b.jpg",
    "assets/images/assessment/ans_img/sem1/test2/ans_c.jpg",
    "assets/images/assessment/ans_img/sem1/test2/ans_d.jpg",
    "assets/images/assessment/ques_img/sem1/test2/q5.jpg",
    "assets/images/assessment/ques_img/sem1/test2/q7.jpg",
    "assets/images/assessment/ques_img/sem1/test2/q8.jpg",

    "assets/images/assessment/ans_img/sem1/test3/Ques7/option_a.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques7/option_b.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques7/option_b.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques7/option_d.PNG",
    "assets/images/assessment/ques_img/sem1/test3/ques8.PNG",
    "assets/images/assessment/ques_img/sem1/test3/ques9.PNG",
    "assets/images/assessment/ques_img/sem1/test3/ques13.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques15/option_a.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques15/option_b.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques15/option_c.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques15/option_d.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques16/option_a.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques16/option_b.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques16/option_c.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques16/option_d.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques18/option_a.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques18/option_b.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques18/option_c.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques18/option_d.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques19/option_a.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques19/option_b.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques19/option_c.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques19/option_d.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques20/option_a.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques20/option_b.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques20/option_c.PNG",
    "assets/images/assessment/ans_img/sem1/test3/Ques20/option_d.PNG",
   
    
];