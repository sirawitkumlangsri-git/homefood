import { a as buildAssetsURL } from '../routes/renderer.mjs';

const intlTelInput = ".iti{display:inline-block;position:relative}.iti *{box-sizing:border-box}.iti__hide{display:none}.iti__v-hide{visibility:hidden}.iti input,.iti input[type=tel],.iti input[type=text]{margin-bottom:0!important;margin-right:0;margin-top:0!important;padding-right:36px;position:relative;z-index:0}.iti__flag-container{bottom:0;padding:1px;position:absolute;right:0;top:0}.iti__selected-flag{align-items:center;display:flex;height:100%;padding:0 6px 0 8px;position:relative;z-index:1}.iti__arrow{border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #555;height:0;margin-left:6px;width:0}[dir=rtl] .iti__arrow{margin-left:0;margin-right:6px}.iti__arrow--up{border-bottom:4px solid #555;border-top:none}.iti__country-list{background-color:#fff;border:1px solid #ccc;box-shadow:1px 1px 4px rgba(0,0,0,.2);list-style:none;margin:0 0 0 -1px;max-height:200px;overflow-y:scroll;padding:0;position:absolute;white-space:nowrap;z-index:2;-webkit-overflow-scrolling:touch}.iti__country-list--dropup{bottom:100%;margin-bottom:-1px}@media (max-width:500px){.iti__country-list{white-space:normal}}.iti__flag-box{display:inline-block;width:20px}.iti__divider{border-bottom:1px solid #ccc;margin-bottom:5px;padding-bottom:5px}.iti__country{align-items:center;display:flex;outline:none;padding:5px 10px}.iti__dial-code{color:#999}.iti__country.iti__highlight{background-color:rgba(0,0,0,.05)}.iti__country-name,.iti__flag-box{margin-right:6px}[dir=rtl] .iti__country-name,[dir=rtl] .iti__flag-box{margin-left:6px;margin-right:0}.iti--allow-dropdown input,.iti--allow-dropdown input[type=tel],.iti--allow-dropdown input[type=text],.iti--separate-dial-code input,.iti--separate-dial-code input[type=tel],.iti--separate-dial-code input[type=text]{margin-left:0;padding-left:52px;padding-right:6px}[dir=rtl] .iti--allow-dropdown input,[dir=rtl] .iti--allow-dropdown input[type=tel],[dir=rtl] .iti--allow-dropdown input[type=text],[dir=rtl] .iti--separate-dial-code input,[dir=rtl] .iti--separate-dial-code input[type=tel],[dir=rtl] .iti--separate-dial-code input[type=text]{margin-right:0;padding-left:6px;padding-right:52px}.iti--allow-dropdown .iti__flag-container,.iti--separate-dial-code .iti__flag-container{left:0;right:auto}[dir=rtl] .iti--allow-dropdown .iti__flag-container,[dir=rtl] .iti--separate-dial-code .iti__flag-container{left:auto;right:0}.iti--allow-dropdown .iti__flag-container:hover{cursor:pointer}.iti--allow-dropdown .iti__flag-container:hover .iti__selected-flag{background-color:rgba(0,0,0,.05)}.iti--allow-dropdown input[disabled]+.iti__flag-container:hover,.iti--allow-dropdown input[readonly]+.iti__flag-container:hover{cursor:default}.iti--allow-dropdown input[disabled]+.iti__flag-container:hover .iti__selected-flag,.iti--allow-dropdown input[readonly]+.iti__flag-container:hover .iti__selected-flag{background-color:transparent}.iti--separate-dial-code .iti__selected-flag{background-color:rgba(0,0,0,.05)}.iti--separate-dial-code.iti--show-flags .iti__selected-dial-code{margin-left:6px}.iti--container{left:-1000px;padding:1px;position:absolute;top:-1000px;z-index:1060}.iti--container:hover{cursor:pointer}.iti-mobile .iti--container{bottom:30px;left:30px;position:fixed;right:30px;top:30px}.iti-mobile .iti__country-list{max-height:100%;width:100%}.iti-mobile .iti__country{line-height:1.5em;padding:10px}.iti__flag{width:20px}.iti__flag.iti__be{width:18px}.iti__flag.iti__ch{width:15px}.iti__flag.iti__mc{width:19px}.iti__flag.iti__ne{width:18px}.iti__flag.iti__np{width:13px}.iti__flag.iti__va{width:15px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.iti__flag{background-size:5652px 15px}}.iti__flag.iti__ac{background-position:0 0;height:10px}.iti__flag.iti__ad{background-position:-22px 0;height:14px}.iti__flag.iti__ae{background-position:-44px 0;height:10px}.iti__flag.iti__af{background-position:-66px 0;height:14px}.iti__flag.iti__ag{background-position:-88px 0;height:14px}.iti__flag.iti__ai{background-position:-110px 0;height:10px}.iti__flag.iti__al{background-position:-132px 0;height:15px}.iti__flag.iti__am{background-position:-154px 0;height:10px}.iti__flag.iti__ao{background-position:-176px 0;height:14px}.iti__flag.iti__aq{background-position:-198px 0;height:14px}.iti__flag.iti__ar{background-position:-220px 0;height:13px}.iti__flag.iti__as{background-position:-242px 0;height:10px}.iti__flag.iti__at{background-position:-264px 0;height:14px}.iti__flag.iti__au{background-position:-286px 0;height:10px}.iti__flag.iti__aw{background-position:-308px 0;height:14px}.iti__flag.iti__ax{background-position:-330px 0;height:13px}.iti__flag.iti__az{background-position:-352px 0;height:10px}.iti__flag.iti__ba{background-position:-374px 0;height:10px}.iti__flag.iti__bb{background-position:-396px 0;height:14px}.iti__flag.iti__bd{background-position:-418px 0;height:12px}.iti__flag.iti__be{background-position:-440px 0;height:15px}.iti__flag.iti__bf{background-position:-460px 0;height:14px}.iti__flag.iti__bg{background-position:-482px 0;height:12px}.iti__flag.iti__bh{background-position:-504px 0;height:12px}.iti__flag.iti__bi{background-position:-526px 0;height:12px}.iti__flag.iti__bj{background-position:-548px 0;height:14px}.iti__flag.iti__bl{background-position:-570px 0;height:14px}.iti__flag.iti__bm{background-position:-592px 0;height:10px}.iti__flag.iti__bn{background-position:-614px 0;height:10px}.iti__flag.iti__bo{background-position:-636px 0;height:14px}.iti__flag.iti__bq{background-position:-658px 0;height:14px}.iti__flag.iti__br{background-position:-680px 0;height:14px}.iti__flag.iti__bs{background-position:-702px 0;height:10px}.iti__flag.iti__bt{background-position:-724px 0;height:14px}.iti__flag.iti__bv{background-position:-746px 0;height:15px}.iti__flag.iti__bw{background-position:-768px 0;height:14px}.iti__flag.iti__by{background-position:-790px 0;height:10px}.iti__flag.iti__bz{background-position:-812px 0;height:14px}.iti__flag.iti__ca{background-position:-834px 0;height:10px}.iti__flag.iti__cc{background-position:-856px 0;height:10px}.iti__flag.iti__cd{background-position:-878px 0;height:15px}.iti__flag.iti__cf{background-position:-900px 0;height:14px}.iti__flag.iti__cg{background-position:-922px 0;height:14px}.iti__flag.iti__ch{background-position:-944px 0;height:15px}.iti__flag.iti__ci{background-position:-961px 0;height:14px}.iti__flag.iti__ck{background-position:-983px 0;height:10px}.iti__flag.iti__cl{background-position:-1005px 0;height:14px}.iti__flag.iti__cm{background-position:-1027px 0;height:14px}.iti__flag.iti__cn{background-position:-1049px 0;height:14px}.iti__flag.iti__co{background-position:-1071px 0;height:14px}.iti__flag.iti__cp{background-position:-1093px 0;height:14px}.iti__flag.iti__cr{background-position:-1115px 0;height:12px}.iti__flag.iti__cu{background-position:-1137px 0;height:10px}.iti__flag.iti__cv{background-position:-1159px 0;height:12px}.iti__flag.iti__cw{background-position:-1181px 0;height:14px}.iti__flag.iti__cx{background-position:-1203px 0;height:10px}.iti__flag.iti__cy{background-position:-1225px 0;height:14px}.iti__flag.iti__cz{background-position:-1247px 0;height:14px}.iti__flag.iti__de{background-position:-1269px 0;height:12px}.iti__flag.iti__dg{background-position:-1291px 0;height:10px}.iti__flag.iti__dj{background-position:-1313px 0;height:14px}.iti__flag.iti__dk{background-position:-1335px 0;height:15px}.iti__flag.iti__dm{background-position:-1357px 0;height:10px}.iti__flag.iti__do{background-position:-1379px 0;height:14px}.iti__flag.iti__dz{background-position:-1401px 0;height:14px}.iti__flag.iti__ea{background-position:-1423px 0;height:14px}.iti__flag.iti__ec{background-position:-1445px 0;height:14px}.iti__flag.iti__ee{background-position:-1467px 0;height:13px}.iti__flag.iti__eg{background-position:-1489px 0;height:14px}.iti__flag.iti__eh{background-position:-1511px 0;height:10px}.iti__flag.iti__er{background-position:-1533px 0;height:10px}.iti__flag.iti__es{background-position:-1555px 0;height:14px}.iti__flag.iti__et{background-position:-1577px 0;height:10px}.iti__flag.iti__eu{background-position:-1599px 0;height:14px}.iti__flag.iti__fi{background-position:-1621px 0;height:12px}.iti__flag.iti__fj{background-position:-1643px 0;height:10px}.iti__flag.iti__fk{background-position:-1665px 0;height:10px}.iti__flag.iti__fm{background-position:-1687px 0;height:11px}.iti__flag.iti__fo{background-position:-1709px 0;height:15px}.iti__flag.iti__fr{background-position:-1731px 0;height:14px}.iti__flag.iti__ga{background-position:-1753px 0;height:15px}.iti__flag.iti__gb{background-position:-1775px 0;height:10px}.iti__flag.iti__gd{background-position:-1797px 0;height:12px}.iti__flag.iti__ge{background-position:-1819px 0;height:14px}.iti__flag.iti__gf{background-position:-1841px 0;height:14px}.iti__flag.iti__gg{background-position:-1863px 0;height:14px}.iti__flag.iti__gh{background-position:-1885px 0;height:14px}.iti__flag.iti__gi{background-position:-1907px 0;height:10px}.iti__flag.iti__gl{background-position:-1929px 0;height:14px}.iti__flag.iti__gm{background-position:-1951px 0;height:14px}.iti__flag.iti__gn{background-position:-1973px 0;height:14px}.iti__flag.iti__gp{background-position:-1995px 0;height:14px}.iti__flag.iti__gq{background-position:-2017px 0;height:14px}.iti__flag.iti__gr{background-position:-2039px 0;height:14px}.iti__flag.iti__gs{background-position:-2061px 0;height:10px}.iti__flag.iti__gt{background-position:-2083px 0;height:13px}.iti__flag.iti__gu{background-position:-2105px 0;height:11px}.iti__flag.iti__gw{background-position:-2127px 0;height:10px}.iti__flag.iti__gy{background-position:-2149px 0;height:12px}.iti__flag.iti__hk{background-position:-2171px 0;height:14px}.iti__flag.iti__hm{background-position:-2193px 0;height:10px}.iti__flag.iti__hn{background-position:-2215px 0;height:10px}.iti__flag.iti__hr{background-position:-2237px 0;height:10px}.iti__flag.iti__ht{background-position:-2259px 0;height:12px}.iti__flag.iti__hu{background-position:-2281px 0;height:10px}.iti__flag.iti__ic{background-position:-2303px 0;height:14px}.iti__flag.iti__id{background-position:-2325px 0;height:14px}.iti__flag.iti__ie{background-position:-2347px 0;height:10px}.iti__flag.iti__il{background-position:-2369px 0;height:15px}.iti__flag.iti__im{background-position:-2391px 0;height:10px}.iti__flag.iti__in{background-position:-2413px 0;height:14px}.iti__flag.iti__io{background-position:-2435px 0;height:10px}.iti__flag.iti__iq{background-position:-2457px 0;height:14px}.iti__flag.iti__ir{background-position:-2479px 0;height:12px}.iti__flag.iti__is{background-position:-2501px 0;height:15px}.iti__flag.iti__it{background-position:-2523px 0;height:14px}.iti__flag.iti__je{background-position:-2545px 0;height:12px}.iti__flag.iti__jm{background-position:-2567px 0;height:10px}.iti__flag.iti__jo{background-position:-2589px 0;height:10px}.iti__flag.iti__jp{background-position:-2611px 0;height:14px}.iti__flag.iti__ke{background-position:-2633px 0;height:14px}.iti__flag.iti__kg{background-position:-2655px 0;height:12px}.iti__flag.iti__kh{background-position:-2677px 0;height:13px}.iti__flag.iti__ki{background-position:-2699px 0;height:10px}.iti__flag.iti__km{background-position:-2721px 0;height:12px}.iti__flag.iti__kn{background-position:-2743px 0;height:14px}.iti__flag.iti__kp{background-position:-2765px 0;height:10px}.iti__flag.iti__kr{background-position:-2787px 0;height:14px}.iti__flag.iti__kw{background-position:-2809px 0;height:10px}.iti__flag.iti__ky{background-position:-2831px 0;height:10px}.iti__flag.iti__kz{background-position:-2853px 0;height:10px}.iti__flag.iti__la{background-position:-2875px 0;height:14px}.iti__flag.iti__lb{background-position:-2897px 0;height:14px}.iti__flag.iti__lc{background-position:-2919px 0;height:10px}.iti__flag.iti__li{background-position:-2941px 0;height:12px}.iti__flag.iti__lk{background-position:-2963px 0;height:10px}.iti__flag.iti__lr{background-position:-2985px 0;height:11px}.iti__flag.iti__ls{background-position:-3007px 0;height:14px}.iti__flag.iti__lt{background-position:-3029px 0;height:12px}.iti__flag.iti__lu{background-position:-3051px 0;height:12px}.iti__flag.iti__lv{background-position:-3073px 0;height:10px}.iti__flag.iti__ly{background-position:-3095px 0;height:10px}.iti__flag.iti__ma{background-position:-3117px 0;height:14px}.iti__flag.iti__mc{background-position:-3139px 0;height:15px}.iti__flag.iti__md{background-position:-3160px 0;height:10px}.iti__flag.iti__me{background-position:-3182px 0;height:10px}.iti__flag.iti__mf{background-position:-3204px 0;height:14px}.iti__flag.iti__mg{background-position:-3226px 0;height:14px}.iti__flag.iti__mh{background-position:-3248px 0;height:11px}.iti__flag.iti__mk{background-position:-3270px 0;height:10px}.iti__flag.iti__ml{background-position:-3292px 0;height:14px}.iti__flag.iti__mm{background-position:-3314px 0;height:14px}.iti__flag.iti__mn{background-position:-3336px 0;height:10px}.iti__flag.iti__mo{background-position:-3358px 0;height:14px}.iti__flag.iti__mp{background-position:-3380px 0;height:10px}.iti__flag.iti__mq{background-position:-3402px 0;height:14px}.iti__flag.iti__mr{background-position:-3424px 0;height:14px}.iti__flag.iti__ms{background-position:-3446px 0;height:10px}.iti__flag.iti__mt{background-position:-3468px 0;height:14px}.iti__flag.iti__mu{background-position:-3490px 0;height:14px}.iti__flag.iti__mv{background-position:-3512px 0;height:14px}.iti__flag.iti__mw{background-position:-3534px 0;height:14px}.iti__flag.iti__mx{background-position:-3556px 0;height:12px}.iti__flag.iti__my{background-position:-3578px 0;height:10px}.iti__flag.iti__mz{background-position:-3600px 0;height:14px}.iti__flag.iti__na{background-position:-3622px 0;height:14px}.iti__flag.iti__nc{background-position:-3644px 0;height:10px}.iti__flag.iti__ne{background-position:-3666px 0;height:15px}.iti__flag.iti__nf{background-position:-3686px 0;height:10px}.iti__flag.iti__ng{background-position:-3708px 0;height:10px}.iti__flag.iti__ni{background-position:-3730px 0;height:12px}.iti__flag.iti__nl{background-position:-3752px 0;height:14px}.iti__flag.iti__no{background-position:-3774px 0;height:15px}.iti__flag.iti__np{background-position:-3796px 0;height:15px}.iti__flag.iti__nr{background-position:-3811px 0;height:10px}.iti__flag.iti__nu{background-position:-3833px 0;height:10px}.iti__flag.iti__nz{background-position:-3855px 0;height:10px}.iti__flag.iti__om{background-position:-3877px 0;height:10px}.iti__flag.iti__pa{background-position:-3899px 0;height:14px}.iti__flag.iti__pe{background-position:-3921px 0;height:14px}.iti__flag.iti__pf{background-position:-3943px 0;height:14px}.iti__flag.iti__pg{background-position:-3965px 0;height:15px}.iti__flag.iti__ph{background-position:-3987px 0;height:10px}.iti__flag.iti__pk{background-position:-4009px 0;height:14px}.iti__flag.iti__pl{background-position:-4031px 0;height:13px}.iti__flag.iti__pm{background-position:-4053px 0;height:14px}.iti__flag.iti__pn{background-position:-4075px 0;height:10px}.iti__flag.iti__pr{background-position:-4097px 0;height:14px}.iti__flag.iti__ps{background-position:-4119px 0;height:10px}.iti__flag.iti__pt{background-position:-4141px 0;height:14px}.iti__flag.iti__pw{background-position:-4163px 0;height:13px}.iti__flag.iti__py{background-position:-4185px 0;height:11px}.iti__flag.iti__qa{background-position:-4207px 0;height:8px}.iti__flag.iti__re{background-position:-4229px 0;height:14px}.iti__flag.iti__ro{background-position:-4251px 0;height:14px}.iti__flag.iti__rs{background-position:-4273px 0;height:14px}.iti__flag.iti__ru{background-position:-4295px 0;height:14px}.iti__flag.iti__rw{background-position:-4317px 0;height:14px}.iti__flag.iti__sa{background-position:-4339px 0;height:14px}.iti__flag.iti__sb{background-position:-4361px 0;height:10px}.iti__flag.iti__sc{background-position:-4383px 0;height:10px}.iti__flag.iti__sd{background-position:-4405px 0;height:10px}.iti__flag.iti__se{background-position:-4427px 0;height:13px}.iti__flag.iti__sg{background-position:-4449px 0;height:14px}.iti__flag.iti__sh{background-position:-4471px 0;height:10px}.iti__flag.iti__si{background-position:-4493px 0;height:10px}.iti__flag.iti__sj{background-position:-4515px 0;height:15px}.iti__flag.iti__sk{background-position:-4537px 0;height:14px}.iti__flag.iti__sl{background-position:-4559px 0;height:14px}.iti__flag.iti__sm{background-position:-4581px 0;height:15px}.iti__flag.iti__sn{background-position:-4603px 0;height:14px}.iti__flag.iti__so{background-position:-4625px 0;height:14px}.iti__flag.iti__sr{background-position:-4647px 0;height:14px}.iti__flag.iti__ss{background-position:-4669px 0;height:10px}.iti__flag.iti__st{background-position:-4691px 0;height:10px}.iti__flag.iti__sv{background-position:-4713px 0;height:12px}.iti__flag.iti__sx{background-position:-4735px 0;height:14px}.iti__flag.iti__sy{background-position:-4757px 0;height:14px}.iti__flag.iti__sz{background-position:-4779px 0;height:14px}.iti__flag.iti__ta{background-position:-4801px 0;height:10px}.iti__flag.iti__tc{background-position:-4823px 0;height:10px}.iti__flag.iti__td{background-position:-4845px 0;height:14px}.iti__flag.iti__tf{background-position:-4867px 0;height:14px}.iti__flag.iti__tg{background-position:-4889px 0;height:13px}.iti__flag.iti__th{background-position:-4911px 0;height:14px}.iti__flag.iti__tj{background-position:-4933px 0;height:10px}.iti__flag.iti__tk{background-position:-4955px 0;height:10px}.iti__flag.iti__tl{background-position:-4977px 0;height:10px}.iti__flag.iti__tm{background-position:-4999px 0;height:14px}.iti__flag.iti__tn{background-position:-5021px 0;height:14px}.iti__flag.iti__to{background-position:-5043px 0;height:10px}.iti__flag.iti__tr{background-position:-5065px 0;height:14px}.iti__flag.iti__tt{background-position:-5087px 0;height:12px}.iti__flag.iti__tv{background-position:-5109px 0;height:10px}.iti__flag.iti__tw{background-position:-5131px 0;height:14px}.iti__flag.iti__tz{background-position:-5153px 0;height:14px}.iti__flag.iti__ua{background-position:-5175px 0;height:14px}.iti__flag.iti__ug{background-position:-5197px 0;height:14px}.iti__flag.iti__um{background-position:-5219px 0;height:11px}.iti__flag.iti__un{background-position:-5241px 0;height:14px}.iti__flag.iti__us{background-position:-5263px 0;height:11px}.iti__flag.iti__uy{background-position:-5285px 0;height:14px}.iti__flag.iti__uz{background-position:-5307px 0;height:10px}.iti__flag.iti__va{background-position:-5329px 0;height:15px}.iti__flag.iti__vc{background-position:-5346px 0;height:14px}.iti__flag.iti__ve{background-position:-5368px 0;height:14px}.iti__flag.iti__vg{background-position:-5390px 0;height:10px}.iti__flag.iti__vi{background-position:-5412px 0;height:14px}.iti__flag.iti__vn{background-position:-5434px 0;height:14px}.iti__flag.iti__vu{background-position:-5456px 0;height:12px}.iti__flag.iti__wf{background-position:-5478px 0;height:14px}.iti__flag.iti__ws{background-position:-5500px 0;height:10px}.iti__flag.iti__xk{background-position:-5522px 0;height:15px}.iti__flag.iti__ye{background-position:-5544px 0;height:14px}.iti__flag.iti__yt{background-position:-5566px 0;height:14px}.iti__flag.iti__za{background-position:-5588px 0;height:14px}.iti__flag.iti__zm{background-position:-5610px 0;height:14px}.iti__flag.iti__zw{background-position:-5632px 0;height:10px}.iti__flag{background-color:#dbdbdb;background-image:url(" + buildAssetsURL("flags.41zgeiS_.png") + ");background-position:20px 0;background-repeat:no-repeat;box-shadow:0 0 1px 0 #888;height:15px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.iti__flag{background-image:url(" + buildAssetsURL("flags_2x.hM8LloC1.png") + ")}}.iti__flag.iti__np{background-color:transparent}";

export { intlTelInput as i };
//# sourceMappingURL=index-styles-2.mjs-C9guVknF.mjs.map
