
ACC.captcha={bindAll:function()
{this.renderWidget();},renderWidget:function()
{$.ajax({url:ACC.config.encodedContextPath+"/sample-order/captcha/widget/recaptcha",type:'GET',cache:false,success:function(html)
{if($(html)!=[])
{$(html).appendTo('.js-recaptcha-captchaaddon');$.getScript('https://www.google.com/recaptcha/api.js?hl='+document.documentElement.lang,function()
{if($('#recaptchaChallangeAnswered').val()=='false')
{$('#g-recaptcha_incorrect').show();}});}},error:function(jqXHR,textStatus,errorThrown){console.log("The following error occurred: "+textStatus,errorThrown);}});}};$(document).ready(function()
{if($('.sampleOrderForm1').html()!=null)
{ACC.captcha.bindAll();}});
