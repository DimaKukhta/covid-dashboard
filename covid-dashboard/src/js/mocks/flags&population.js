// export default JSON [ {
//     flag: url {string}
//     name: coutry {string}
//     population: population {number}
//  }]
// API url = https://restcountries.eu/rest/v2/all?fields=name;population;flag
 const flagsPopulation = [
    {
    flag: "https://restcountries.eu/data/afg.svg",
    name: "Afghanistan",
    population: 27657145
    },
    {
    flag: "https://restcountries.eu/data/ala.svg",
    name: "Åland Islands",
    population: 28875
    },
    {
    flag: "https://restcountries.eu/data/alb.svg",
    name: "Albania",
    population: 2886026
    },
    {
    flag: "https://restcountries.eu/data/dza.svg",
    name: "Algeria",
    population: 40400000
    },
    {
    flag: "https://restcountries.eu/data/asm.svg",
    name: "American Samoa",
    population: 57100
    },
    {
    flag: "https://restcountries.eu/data/and.svg",
    name: "Andorra",
    population: 78014
    },
    {
    flag: "https://restcountries.eu/data/ago.svg",
    name: "Angola",
    population: 25868000
    },
    {
    flag: "https://restcountries.eu/data/aia.svg",
    name: "Anguilla",
    population: 13452
    },
    {
    flag: "https://restcountries.eu/data/ata.svg",
    name: "Antarctica",
    population: 1000
    },
    {
    flag: "https://restcountries.eu/data/atg.svg",
    name: "Antigua and Barbuda",
    population: 86295
    },
    {
    flag: "https://restcountries.eu/data/arg.svg",
    name: "Argentina",
    population: 43590400
    },
    {
    flag: "https://restcountries.eu/data/arm.svg",
    name: "Armenia",
    population: 2994400
    },
    {
    flag: "https://restcountries.eu/data/abw.svg",
    name: "Aruba",
    population: 107394
    },
    {
    flag: "https://restcountries.eu/data/aus.svg",
    name: "Australia",
    population: 24117360
    },
    {
    flag: "https://restcountries.eu/data/aut.svg",
    name: "Austria",
    population: 8725931
    },
    {
    flag: "https://restcountries.eu/data/aze.svg",
    name: "Azerbaijan",
    population: 9730500
    },
    {
    flag: "https://restcountries.eu/data/bhs.svg",
    name: "Bahamas",
    population: 378040
    },
    {
    flag: "https://restcountries.eu/data/bhr.svg",
    name: "Bahrain",
    population: 1404900
    },
    {
    flag: "https://restcountries.eu/data/bgd.svg",
    name: "Bangladesh",
    population: 161006790
    },
    {
    flag: "https://restcountries.eu/data/brb.svg",
    name: "Barbados",
    population: 285000
    },
    {
    flag: "https://restcountries.eu/data/blr.svg",
    name: "Belarus",
    population: 9498700
    },
    {
    flag: "https://restcountries.eu/data/bel.svg",
    name: "Belgium",
    population: 11319511
    },
    {
    flag: "https://restcountries.eu/data/blz.svg",
    name: "Belize",
    population: 370300
    },
    {
    flag: "https://restcountries.eu/data/ben.svg",
    name: "Benin",
    population: 10653654
    },
    {
    flag: "https://restcountries.eu/data/bmu.svg",
    name: "Bermuda",
    population: 61954
    },
    {
    flag: "https://restcountries.eu/data/btn.svg",
    name: "Bhutan",
    population: 775620
    },
    {
    flag: "https://restcountries.eu/data/bol.svg",
    name: "Bolivia (Plurinational State of)",
    population: 10985059
    },
    {
    flag: "https://restcountries.eu/data/bes.svg",
    name: "Bonaire, Sint Eustatius and Saba",
    population: 17408
    },
    {
    flag: "https://restcountries.eu/data/bih.svg",
    name: "Bosnia and Herzegovina",
    population: 3531159
    },
    {
    flag: "https://restcountries.eu/data/bwa.svg",
    name: "Botswana",
    population: 2141206
    },
    {
    flag: "https://restcountries.eu/data/bvt.svg",
    name: "Bouvet Island",
    population: 0
    },
    {
    flag: "https://restcountries.eu/data/bra.svg",
    name: "Brazil",
    population: 206135893
    },
    {
    flag: "https://restcountries.eu/data/iot.svg",
    name: "British Indian Ocean Territory",
    population: 3000
    },
    {
    flag: "https://restcountries.eu/data/umi.svg",
    name: "United States Minor Outlying Islands",
    population: 300
    },
    {
    flag: "https://restcountries.eu/data/vgb.svg",
    name: "Virgin Islands (British)",
    population: 28514
    },
    {
    flag: "https://restcountries.eu/data/vir.svg",
    name: "Virgin Islands (U.S.)",
    population: 114743
    },
    {
    flag: "https://restcountries.eu/data/brn.svg",
    name: "Brunei Darussalam",
    population: 411900
    },
    {
    flag: "https://restcountries.eu/data/bgr.svg",
    name: "Bulgaria",
    population: 7153784
    },
    {
    flag: "https://restcountries.eu/data/bfa.svg",
    name: "Burkina Faso",
    population: 19034397
    },
    {
    flag: "https://restcountries.eu/data/bdi.svg",
    name: "Burundi",
    population: 10114505
    },
    {
    flag: "https://restcountries.eu/data/khm.svg",
    name: "Cambodia",
    population: 15626444
    },
    {
    flag: "https://restcountries.eu/data/cmr.svg",
    name: "Cameroon",
    population: 22709892
    },
    {
    flag: "https://restcountries.eu/data/can.svg",
    name: "Canada",
    population: 36155487
    },
    {
    flag: "https://restcountries.eu/data/cpv.svg",
    name: "Cabo Verde",
    population: 531239
    },
    {
    flag: "https://restcountries.eu/data/cym.svg",
    name: "Cayman Islands",
    population: 58238
    },
    {
    flag: "https://restcountries.eu/data/caf.svg",
    name: "Central African Republic",
    population: 4998000
    },
    {
    flag: "https://restcountries.eu/data/tcd.svg",
    name: "Chad",
    population: 14497000
    },
    {
    flag: "https://restcountries.eu/data/chl.svg",
    name: "Chile",
    population: 18191900
    },
    {
    flag: "https://restcountries.eu/data/chn.svg",
    name: "China",
    population: 1377422166
    },
    {
    flag: "https://restcountries.eu/data/cxr.svg",
    name: "Christmas Island",
    population: 2072
    },
    {
    flag: "https://restcountries.eu/data/cck.svg",
    name: "Cocos (Keeling) Islands",
    population: 550
    },
    {
    flag: "https://restcountries.eu/data/col.svg",
    name: "Colombia",
    population: 48759958
    },
    {
    flag: "https://restcountries.eu/data/com.svg",
    name: "Comoros",
    population: 806153
    },
    {
    flag: "https://restcountries.eu/data/cog.svg",
    name: "Congo",
    population: 4741000
    },
    {
    flag: "https://restcountries.eu/data/cod.svg",
    name: "Congo (Democratic Republic of the)",
    population: 85026000
    },
    {
    flag: "https://restcountries.eu/data/cok.svg",
    name: "Cook Islands",
    population: 18100
    },
    {
    flag: "https://restcountries.eu/data/cri.svg",
    name: "Costa Rica",
    population: 4890379
    },
    {
    flag: "https://restcountries.eu/data/hrv.svg",
    name: "Croatia",
    population: 4190669
    },
    {
    flag: "https://restcountries.eu/data/cub.svg",
    name: "Cuba",
    population: 11239004
    },
    {
    flag: "https://restcountries.eu/data/cuw.svg",
    name: "Curaçao",
    population: 154843
    },
    {
    flag: "https://restcountries.eu/data/cyp.svg",
    name: "Cyprus",
    population: 847000
    },
    {
    flag: "https://restcountries.eu/data/cze.svg",
    name: "Czech Republic",
    population: 10558524
    },
    {
    flag: "https://restcountries.eu/data/dnk.svg",
    name: "Denmark",
    population: 5717014
    },
    {
    flag: "https://restcountries.eu/data/dji.svg",
    name: "Djibouti",
    population: 900000
    },
    {
    flag: "https://restcountries.eu/data/dma.svg",
    name: "Dominica",
    population: 71293
    },
    {
    flag: "https://restcountries.eu/data/dom.svg",
    name: "Dominican Republic",
    population: 10075045
    },
    {
    flag: "https://restcountries.eu/data/ecu.svg",
    name: "Ecuador",
    population: 16545799
    },
    {
    flag: "https://restcountries.eu/data/egy.svg",
    name: "Egypt",
    population: 91290000
    },
    {
    flag: "https://restcountries.eu/data/slv.svg",
    name: "El Salvador",
    population: 6520675
    },
    {
    flag: "https://restcountries.eu/data/gnq.svg",
    name: "Equatorial Guinea",
    population: 1222442
    },
    {
    flag: "https://restcountries.eu/data/eri.svg",
    name: "Eritrea",
    population: 5352000
    },
    {
    flag: "https://restcountries.eu/data/est.svg",
    name: "Estonia",
    population: 1315944
    },
    {
    flag: "https://restcountries.eu/data/eth.svg",
    name: "Ethiopia",
    population: 92206005
    },
    {
    flag: "https://restcountries.eu/data/flk.svg",
    name: "Falkland Islands (Malvinas)",
    population: 2563
    },
    {
    flag: "https://restcountries.eu/data/fro.svg",
    name: "Faroe Islands",
    population: 49376
    },
    {
    flag: "https://restcountries.eu/data/fji.svg",
    name: "Fiji",
    population: 867000
    },
    {
    flag: "https://restcountries.eu/data/fin.svg",
    name: "Finland",
    population: 5491817
    },
    {
    flag: "https://restcountries.eu/data/fra.svg",
    name: "France",
    population: 66710000
    },
    {
    flag: "https://restcountries.eu/data/guf.svg",
    name: "French Guiana",
    population: 254541
    },
    {
    flag: "https://restcountries.eu/data/pyf.svg",
    name: "French Polynesia",
    population: 271800
    },
    {
    flag: "https://restcountries.eu/data/atf.svg",
    name: "French Southern Territories",
    population: 140
    },
    {
    flag: "https://restcountries.eu/data/gab.svg",
    name: "Gabon",
    population: 1802278
    },
    {
    flag: "https://restcountries.eu/data/gmb.svg",
    name: "Gambia",
    population: 1882450
    },
    {
    flag: "https://restcountries.eu/data/geo.svg",
    name: "Georgia",
    population: 3720400
    },
    {
    flag: "https://restcountries.eu/data/deu.svg",
    name: "Germany",
    population: 81770900
    },
    {
    flag: "https://restcountries.eu/data/gha.svg",
    name: "Ghana",
    population: 27670174
    },
    {
    flag: "https://restcountries.eu/data/gib.svg",
    name: "Gibraltar",
    population: 33140
    },
    {
    flag: "https://restcountries.eu/data/grc.svg",
    name: "Greece",
    population: 10858018
    },
    {
    flag: "https://restcountries.eu/data/grl.svg",
    name: "Greenland",
    population: 55847
    },
    {
    flag: "https://restcountries.eu/data/grd.svg",
    name: "Grenada",
    population: 103328
    },
    {
    flag: "https://restcountries.eu/data/glp.svg",
    name: "Guadeloupe",
    population: 400132
    },
    {
    flag: "https://restcountries.eu/data/gum.svg",
    name: "Guam",
    population: 184200
    },
    {
    flag: "https://restcountries.eu/data/gtm.svg",
    name: "Guatemala",
    population: 16176133
    },
    {
    flag: "https://restcountries.eu/data/ggy.svg",
    name: "Guernsey",
    population: 62999
    },
    {
    flag: "https://restcountries.eu/data/gin.svg",
    name: "Guinea",
    population: 12947000
    },
    {
    flag: "https://restcountries.eu/data/gnb.svg",
    name: "Guinea-Bissau",
    population: 1547777
    },
    {
    flag: "https://restcountries.eu/data/guy.svg",
    name: "Guyana",
    population: 746900
    },
    {
    flag: "https://restcountries.eu/data/hti.svg",
    name: "Haiti",
    population: 11078033
    },
    {
    flag: "https://restcountries.eu/data/hmd.svg",
    name: "Heard Island and McDonald Islands",
    population: 0
    },
    {
    flag: "https://restcountries.eu/data/vat.svg",
    name: "Holy See",
    population: 451
    },
    {
    flag: "https://restcountries.eu/data/hnd.svg",
    name: "Honduras",
    population: 8576532
    },
    {
    flag: "https://restcountries.eu/data/hkg.svg",
    name: "Hong Kong",
    population: 7324300
    },
    {
    flag: "https://restcountries.eu/data/hun.svg",
    name: "Hungary",
    population: 9823000
    },
    {
    flag: "https://restcountries.eu/data/isl.svg",
    name: "Iceland",
    population: 334300
    },
    {
    flag: "https://restcountries.eu/data/ind.svg",
    name: "India",
    population: 1295210000
    },
    {
    flag: "https://restcountries.eu/data/idn.svg",
    name: "Indonesia",
    population: 258705000
    },
    {
    flag: "https://restcountries.eu/data/civ.svg",
    name: "Côte d'Ivoire",
    population: 22671331
    },
    {
    flag: "https://restcountries.eu/data/irn.svg",
    name: "Iran (Islamic Republic of)",
    population: 79369900
    },
    {
    flag: "https://restcountries.eu/data/irq.svg",
    name: "Iraq",
    population: 37883543
    },
    {
    flag: "https://restcountries.eu/data/irl.svg",
    name: "Ireland",
    population: 6378000
    },
    {
    flag: "https://restcountries.eu/data/imn.svg",
    name: "Isle of Man",
    population: 84497
    },
    {
    flag: "https://restcountries.eu/data/isr.svg",
    name: "Israel",
    population: 8527400
    },
    {
    flag: "https://restcountries.eu/data/ita.svg",
    name: "Italy",
    population: 60665551
    },
    {
    flag: "https://restcountries.eu/data/jam.svg",
    name: "Jamaica",
    population: 2723246
    },
    {
    flag: "https://restcountries.eu/data/jpn.svg",
    name: "Japan",
    population: 126960000
    },
    {
    flag: "https://restcountries.eu/data/jey.svg",
    name: "Jersey",
    population: 100800
    },
    {
    flag: "https://restcountries.eu/data/jor.svg",
    name: "Jordan",
    population: 9531712
    },
    {
    flag: "https://restcountries.eu/data/kaz.svg",
    name: "Kazakhstan",
    population: 17753200
    },
    {
    flag: "https://restcountries.eu/data/ken.svg",
    name: "Kenya",
    population: 47251000
    },
    {
    flag: "https://restcountries.eu/data/kir.svg",
    name: "Kiribati",
    population: 113400
    },
    {
    flag: "https://restcountries.eu/data/kwt.svg",
    name: "Kuwait",
    population: 4183658
    },
    {
    flag: "https://restcountries.eu/data/kgz.svg",
    name: "Kyrgyzstan",
    population: 6047800
    },
    {
    flag: "https://restcountries.eu/data/lao.svg",
    name: "Lao People's Democratic Republic",
    population: 6492400
    },
    {
    flag: "https://restcountries.eu/data/lva.svg",
    name: "Latvia",
    population: 1961600
    },
    {
    flag: "https://restcountries.eu/data/lbn.svg",
    name: "Lebanon",
    population: 5988000
    },
    {
    flag: "https://restcountries.eu/data/lso.svg",
    name: "Lesotho",
    population: 1894194
    },
    {
    flag: "https://restcountries.eu/data/lbr.svg",
    name: "Liberia",
    population: 4615000
    },
    {
    flag: "https://restcountries.eu/data/lby.svg",
    name: "Libya",
    population: 6385000
    },
    {
    flag: "https://restcountries.eu/data/lie.svg",
    name: "Liechtenstein",
    population: 37623
    },
    {
    flag: "https://restcountries.eu/data/ltu.svg",
    name: "Lithuania",
    population: 2872294
    },
    {
    flag: "https://restcountries.eu/data/lux.svg",
    name: "Luxembourg",
    population: 576200
    },
    {
    flag: "https://restcountries.eu/data/mac.svg",
    name: "Macao",
    population: 649100
    },
    {
    flag: "https://restcountries.eu/data/mkd.svg",
    name: "Macedonia (the former Yugoslav Republic of)",
    population: 2058539
    },
    {
    flag: "https://restcountries.eu/data/mdg.svg",
    name: "Madagascar",
    population: 22434363
    },
    {
    flag: "https://restcountries.eu/data/mwi.svg",
    name: "Malawi",
    population: 16832910
    },
    {
    flag: "https://restcountries.eu/data/mys.svg",
    name: "Malaysia",
    population: 31405416
    },
    {
    flag: "https://restcountries.eu/data/mdv.svg",
    name: "Maldives",
    population: 344023
    },
    {
    flag: "https://restcountries.eu/data/mli.svg",
    name: "Mali",
    population: 18135000
    },
    {
    flag: "https://restcountries.eu/data/mlt.svg",
    name: "Malta",
    population: 425384
    },
    {
    flag: "https://restcountries.eu/data/mhl.svg",
    name: "Marshall Islands",
    population: 54880
    },
    {
    flag: "https://restcountries.eu/data/mtq.svg",
    name: "Martinique",
    population: 378243
    },
    {
    flag: "https://restcountries.eu/data/mrt.svg",
    name: "Mauritania",
    population: 3718678
    },
    {
    flag: "https://restcountries.eu/data/mus.svg",
    name: "Mauritius",
    population: 1262879
    },
    {
    flag: "https://restcountries.eu/data/myt.svg",
    name: "Mayotte",
    population: 226915
    },
    {
    flag: "https://restcountries.eu/data/mex.svg",
    name: "Mexico",
    population: 122273473
    },
    {
    flag: "https://restcountries.eu/data/fsm.svg",
    name: "Micronesia (Federated States of)",
    population: 102800
    },
    {
    flag: "https://restcountries.eu/data/mda.svg",
    name: "Moldova (Republic of)",
    population: 3553100
    },
    {
    flag: "https://restcountries.eu/data/mco.svg",
    name: "Monaco",
    population: 38400
    },
    {
    flag: "https://restcountries.eu/data/mng.svg",
    name: "Mongolia",
    population: 3093100
    },
    {
    flag: "https://restcountries.eu/data/mne.svg",
    name: "Montenegro",
    population: 621810
    },
    {
    flag: "https://restcountries.eu/data/msr.svg",
    name: "Montserrat",
    population: 4922
    },
    {
    flag: "https://restcountries.eu/data/mar.svg",
    name: "Morocco",
    population: 33337529
    },
    {
    flag: "https://restcountries.eu/data/moz.svg",
    name: "Mozambique",
    population: 26423700
    },
    {
    flag: "https://restcountries.eu/data/mmr.svg",
    name: "Myanmar",
    population: 51419420
    },
    {
    flag: "https://restcountries.eu/data/nam.svg",
    name: "Namibia",
    population: 2324388
    },
    {
    flag: "https://restcountries.eu/data/nru.svg",
    name: "Nauru",
    population: 10084
    },
    {
    flag: "https://restcountries.eu/data/npl.svg",
    name: "Nepal",
    population: 28431500
    },
    {
    flag: "https://restcountries.eu/data/nld.svg",
    name: "Netherlands",
    population: 17019800
    },
    {
    flag: "https://restcountries.eu/data/ncl.svg",
    name: "New Caledonia",
    population: 268767
    },
    {
    flag: "https://restcountries.eu/data/nzl.svg",
    name: "New Zealand",
    population: 4697854
    },
    {
    flag: "https://restcountries.eu/data/nic.svg",
    name: "Nicaragua",
    population: 6262703
    },
    {
    flag: "https://restcountries.eu/data/ner.svg",
    name: "Niger",
    population: 20715000
    },
    {
    flag: "https://restcountries.eu/data/nga.svg",
    name: "Nigeria",
    population: 186988000
    },
    {
    flag: "https://restcountries.eu/data/niu.svg",
    name: "Niue",
    population: 1470
    },
    {
    flag: "https://restcountries.eu/data/nfk.svg",
    name: "Norfolk Island",
    population: 2302
    },
    {
    flag: "https://restcountries.eu/data/prk.svg",
    name: "Korea (Democratic People's Republic of)",
    population: 25281000
    },
    {
    flag: "https://restcountries.eu/data/mnp.svg",
    name: "Northern Mariana Islands",
    population: 56940
    },
    {
    flag: "https://restcountries.eu/data/nor.svg",
    name: "Norway",
    population: 5223256
    },
    {
    flag: "https://restcountries.eu/data/omn.svg",
    name: "Oman",
    population: 4420133
    },
    {
    flag: "https://restcountries.eu/data/pak.svg",
    name: "Pakistan",
    population: 194125062
    },
    {
    flag: "https://restcountries.eu/data/plw.svg",
    name: "Palau",
    population: 17950
    },
    {
    flag: "https://restcountries.eu/data/pse.svg",
    name: "Palestine, State of",
    population: 4682467
    },
    {
    flag: "https://restcountries.eu/data/pan.svg",
    name: "Panama",
    population: 3814672
    },
    {
    flag: "https://restcountries.eu/data/png.svg",
    name: "Papua New Guinea",
    population: 8083700
    },
    {
    flag: "https://restcountries.eu/data/pry.svg",
    name: "Paraguay",
    population: 6854536
    },
    {
    flag: "https://restcountries.eu/data/per.svg",
    name: "Peru",
    population: 31488700
    },
    {
    flag: "https://restcountries.eu/data/phl.svg",
    name: "Philippines",
    population: 103279800
    },
    {
    flag: "https://restcountries.eu/data/pcn.svg",
    name: "Pitcairn",
    population: 56
    },
    {
    flag: "https://restcountries.eu/data/pol.svg",
    name: "Poland",
    population: 38437239
    },
    {
    flag: "https://restcountries.eu/data/prt.svg",
    name: "Portugal",
    population: 10374822
    },
    {
    flag: "https://restcountries.eu/data/pri.svg",
    name: "Puerto Rico",
    population: 3474182
    },
    {
    flag: "https://restcountries.eu/data/qat.svg",
    name: "Qatar",
    population: 2587564
    },
    {
    flag: "https://restcountries.eu/data/kos.svg",
    name: "Republic of Kosovo",
    population: 1733842
    },
    {
    flag: "https://restcountries.eu/data/reu.svg",
    name: "Réunion",
    population: 840974
    },
    {
    flag: "https://restcountries.eu/data/rou.svg",
    name: "Romania",
    population: 19861408
    },
    {
    flag: "https://restcountries.eu/data/rus.svg",
    name: "Russian Federation",
    population: 146599183
    },
    {
    flag: "https://restcountries.eu/data/rwa.svg",
    name: "Rwanda",
    population: 11553188
    },
    {
    flag: "https://restcountries.eu/data/blm.svg",
    name: "Saint Barthélemy",
    population: 9417
    },
    {
    flag: "https://restcountries.eu/data/shn.svg",
    name: "Saint Helena, Ascension and Tristan da Cunha",
    population: 4255
    },
    {
    flag: "https://restcountries.eu/data/kna.svg",
    name: "Saint Kitts and Nevis",
    population: 46204
    },
    {
    flag: "https://restcountries.eu/data/lca.svg",
    name: "Saint Lucia",
    population: 186000
    },
    {
    flag: "https://restcountries.eu/data/maf.svg",
    name: "Saint Martin (French part)",
    population: 36979
    },
    {
    flag: "https://restcountries.eu/data/spm.svg",
    name: "Saint Pierre and Miquelon",
    population: 6069
    },
    {
    flag: "https://restcountries.eu/data/vct.svg",
    name: "Saint Vincent and the Grenadines",
    population: 109991
    },
    {
    flag: "https://restcountries.eu/data/wsm.svg",
    name: "Samoa",
    population: 194899
    },
    {
    flag: "https://restcountries.eu/data/smr.svg",
    name: "San Marino",
    population: 33005
    },
    {
    flag: "https://restcountries.eu/data/stp.svg",
    name: "Sao Tome and Principe",
    population: 187356
    },
    {
    flag: "https://restcountries.eu/data/sau.svg",
    name: "Saudi Arabia",
    population: 32248200
    },
    {
    flag: "https://restcountries.eu/data/sen.svg",
    name: "Senegal",
    population: 14799859
    },
    {
    flag: "https://restcountries.eu/data/srb.svg",
    name: "Serbia",
    population: 7076372
    },
    {
    flag: "https://restcountries.eu/data/syc.svg",
    name: "Seychelles",
    population: 91400
    },
    {
    flag: "https://restcountries.eu/data/sle.svg",
    name: "Sierra Leone",
    population: 7075641
    },
    {
    flag: "https://restcountries.eu/data/sgp.svg",
    name: "Singapore",
    population: 5535000
    },
    {
    flag: "https://restcountries.eu/data/sxm.svg",
    name: "Sint Maarten (Dutch part)",
    population: 38247
    },
    {
    flag: "https://restcountries.eu/data/svk.svg",
    name: "Slovakia",
    population: 5426252
    },
    {
    flag: "https://restcountries.eu/data/svn.svg",
    name: "Slovenia",
    population: 2064188
    },
    {
    flag: "https://restcountries.eu/data/slb.svg",
    name: "Solomon Islands",
    population: 642000
    },
    {
    flag: "https://restcountries.eu/data/som.svg",
    name: "Somalia",
    population: 11079000
    },
    {
    flag: "https://restcountries.eu/data/zaf.svg",
    name: "South Africa",
    population: 55653654
    },
    {
    flag: "https://restcountries.eu/data/sgs.svg",
    name: "South Georgia and the South Sandwich Islands",
    population: 30
    },
    {
    flag: "https://restcountries.eu/data/kor.svg",
    name: "Korea (Republic of)",
    population: 50801405
    },
    {
    flag: "https://restcountries.eu/data/ssd.svg",
    name: "South Sudan",
    population: 12131000
    },
    {
    flag: "https://restcountries.eu/data/esp.svg",
    name: "Spain",
    population: 46438422
    },
    {
    flag: "https://restcountries.eu/data/lka.svg",
    name: "Sri Lanka",
    population: 20966000
    },
    {
    flag: "https://restcountries.eu/data/sdn.svg",
    name: "Sudan",
    population: 39598700
    },
    {
    flag: "https://restcountries.eu/data/sur.svg",
    name: "Suriname",
    population: 541638
    },
    {
    flag: "https://restcountries.eu/data/sjm.svg",
    name: "Svalbard and Jan Mayen",
    population: 2562
    },
    {
    flag: "https://restcountries.eu/data/swz.svg",
    name: "Swaziland",
    population: 1132657
    },
    {
    flag: "https://restcountries.eu/data/swe.svg",
    name: "Sweden",
    population: 9894888
    },
    {
    flag: "https://restcountries.eu/data/che.svg",
    name: "Switzerland",
    population: 8341600
    },
    {
    flag: "https://restcountries.eu/data/syr.svg",
    name: "Syrian Arab Republic",
    population: 18564000
    },
    {
    flag: "https://restcountries.eu/data/twn.svg",
    name: "Taiwan",
    population: 23503349
    },
    {
    flag: "https://restcountries.eu/data/tjk.svg",
    name: "Tajikistan",
    population: 8593600
    },
    {
    flag: "https://restcountries.eu/data/tza.svg",
    name: "Tanzania, United Republic of",
    population: 55155000
    },
    {
    flag: "https://restcountries.eu/data/tha.svg",
    name: "Thailand",
    population: 65327652
    },
    {
    flag: "https://restcountries.eu/data/tls.svg",
    name: "Timor-Leste",
    population: 1167242
    },
    {
    flag: "https://restcountries.eu/data/tgo.svg",
    name: "Togo",
    population: 7143000
    },
    {
    flag: "https://restcountries.eu/data/tkl.svg",
    name: "Tokelau",
    population: 1411
    },
    {
    flag: "https://restcountries.eu/data/ton.svg",
    name: "Tonga",
    population: 103252
    },
    {
    flag: "https://restcountries.eu/data/tto.svg",
    name: "Trinidad and Tobago",
    population: 1349667
    },
    {
    flag: "https://restcountries.eu/data/tun.svg",
    name: "Tunisia",
    population: 11154400
    },
    {
    flag: "https://restcountries.eu/data/tur.svg",
    name: "Turkey",
    population: 78741053
    },
    {
    flag: "https://restcountries.eu/data/tkm.svg",
    name: "Turkmenistan",
    population: 4751120
    },
    {
    flag: "https://restcountries.eu/data/tca.svg",
    name: "Turks and Caicos Islands",
    population: 31458
    },
    {
    flag: "https://restcountries.eu/data/tuv.svg",
    name: "Tuvalu",
    population: 10640
    },
    {
    flag: "https://restcountries.eu/data/uga.svg",
    name: "Uganda",
    population: 33860700
    },
    {
    flag: "https://restcountries.eu/data/ukr.svg",
    name: "Ukraine",
    population: 42692393
    },
    {
    flag: "https://restcountries.eu/data/are.svg",
    name: "United Arab Emirates",
    population: 9856000
    },
    {
    flag: "https://restcountries.eu/data/gbr.svg",
    name: "United Kingdom of Great Britain and Northern Ireland",
    population: 65110000
    },
    {
    flag: "https://restcountries.eu/data/usa.svg",
    name: "United States of America",
    population: 323947000
    },
    {
    flag: "https://restcountries.eu/data/ury.svg",
    name: "Uruguay",
    population: 3480222
    },
    {
    flag: "https://restcountries.eu/data/uzb.svg",
    name: "Uzbekistan",
    population: 31576400
    },
    {
    flag: "https://restcountries.eu/data/vut.svg",
    name: "Vanuatu",
    population: 277500
    },
    {
    flag: "https://restcountries.eu/data/ven.svg",
    name: "Venezuela (Bolivarian Republic of)",
    population: 31028700
    },
    {
    flag: "https://restcountries.eu/data/vnm.svg",
    name: "Viet Nam",
    population: 92700000
    },
    {
    flag: "https://restcountries.eu/data/wlf.svg",
    name: "Wallis and Futuna",
    population: 11750
    },
    {
    flag: "https://restcountries.eu/data/esh.svg",
    name: "Western Sahara",
    population: 510713
    },
    {
    flag: "https://restcountries.eu/data/yem.svg",
    name: "Yemen",
    population: 27478000
    },
    {
    flag: "https://restcountries.eu/data/zmb.svg",
    name: "Zambia",
    population: 15933883
    },
    {
    flag: "https://restcountries.eu/data/zwe.svg",
    name: "Zimbabwe",
    population: 14240168
    }
];

export default JSON.stringify(flagsPopulation);
