import {AppBar, Toolbar, IconButton, Button} from "@mui/material";
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
// @ts-ignore
import DarkModeContext from "../hooks/DarkModeContext.tsx";
import {useContext} from "react";

interface Props {

}

export default function Navbar(props: Props) {
    const [darkMode, setDarkMode] = useContext(DarkModeContext)

    return (
        <div>
            <AppBar position={"fixed"}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        OpenICT Portfolio
                    </Typography>
                    {darkMode === "dark" ? (
                        <Button color="inherit" onClick={() => {setDarkMode("light")}}>Light Mode</Button>
                    ):(
                        <Button color="inherit" onClick={() => {setDarkMode("dark")}}>Dark Mode</Button>

                    )}
                </Toolbar>
            </AppBar>
            <div>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg"
                     className="transition duration-300 ease-in-out delay-150">
                    <defs>
                        <linearGradient id="gradient" x1="40%" y1="1%" x2="60%" y2="99%">
                            <stop offset="5%" stop-color="#1b5c76"></stop>
                            <stop offset="95%" stop-color="#121212"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        d="M 0,400 C 0,400 0,80 0,80 C 21.406772067876318,87.27150360231425 42.813544135752636,94.5430072046285 65,91 C 87.18645586424736,87.4569927953715 110.15259552486575,73.09947478380022 136,76 C 161.84740447513425,78.90052521619978 190.57607376478433,99.05909366017062 214,107 C 237.42392623521567,114.94090633982938 255.54310941599692,110.66415057551725 283,101 C 310.4568905840031,91.33584942448275 347.2514885712281,76.28430403776034 370,66 C 392.7485114287719,55.71569596223966 401.45093629909064,50.19863327344134 424,55 C 446.54906370090936,59.80136672655866 482.9447662324094,74.9211628684743 510,79 C 537.0552337675906,83.0788371315257 554.769998771272,76.11671525266144 576,81 C 597.230001228728,85.88328474733856 621.9752386825025,102.61197612087996 644,97 C 666.0247613174975,91.38802387912004 685.3290464987178,63.43538026381875 714,53 C 742.6709535012822,42.56461973618125 780.708575322626,49.64650282384501 804,65 C 827.291424677374,80.35349717615499 835.8366522107787,103.97860844080125 860,98 C 884.1633477892213,92.02139155919875 923.9448158342593,56.43906341294999 947,50 C 970.0551841657407,43.56093658705001 976.3840844521847,66.26513790739875 1000,76 C 1023.6159155478153,85.73486209260125 1064.5188463570016,82.50038495745497 1088,78 C 1111.4811536429984,73.49961504254503 1117.5405301198089,67.73332226278139 1141,76 C 1164.4594698801911,84.26667773721861 1205.3190331637622,106.56632599141942 1231,100 C 1256.6809668362378,93.43367400858058 1267.183337225141,58.001373771540926 1285,50 C 1302.816662774859,41.998626228459074 1327.9476179356739,61.428178922416876 1355,71 C 1382.0523820643261,80.57182107758312 1411.026191032163,80.28591053879157 1440,80 C 1440,80 1440,400 1440,400 Z"
                        stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.265"
                        className="transition-all duration-300 ease-in-out delay-150 path-0"
                        transform="rotate(-180 720 200)"></path>
                    <defs>
                        <linearGradient id="gradient" x1="40%" y1="1%" x2="60%" y2="99%">
                            <stop offset="5%" stop-color="#1b5c76"></stop>
                            <stop offset="95%" stop-color="#121212"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        d="M 0,400 C 0,400 0,160 0,160 C 25.67279384507325,145.74688874137968 51.3455876901465,131.49377748275938 78,137 C 104.6544123098535,142.50622251724062 132.2904430844873,167.77177881034223 153,174 C 173.7095569155127,180.22822118965777 187.49263997190428,167.41910727587168 209,155 C 230.50736002809572,142.58089272412832 259.73899702789555,130.55179208617102 289,133 C 318.26100297210445,135.44820791382898 347.55137191651346,152.37372437944424 370,162 C 392.44862808348654,171.62627562055576 408.0555153060507,173.95331039605196 428,170 C 447.9444846939493,166.04668960394804 472.2265668592837,155.8130340363479 501,158 C 529.7734331407163,160.1869659636521 563.0382172568147,174.79455345855644 588,182 C 612.9617827431853,189.20544654144356 629.6205641134576,189.0087521294263 653,178 C 676.3794358865424,166.9912478705737 706.4795262893548,145.1704380237384 731,140 C 755.5204737106452,134.8295619762616 774.4613307291233,146.30949577562012 794,158 C 813.5386692708767,169.69050422437988 833.6751507941516,181.59157887378117 854,175 C 874.3248492058484,168.40842112621883 894.8380660942705,143.3241887292552 924,134 C 953.1619339057295,124.67581127074479 990.9725848287662,131.11166620919798 1020,143 C 1049.0274151712338,154.88833379080202 1069.2715945906637,172.22914643395288 1090,167 C 1110.7284054093363,161.77085356604712 1131.941036808579,133.97174805499054 1154,132 C 1176.058963191421,130.02825194500946 1198.96425817502,153.88386134608498 1226,167 C 1253.03574182498,180.11613865391502 1284.2019304913408,182.4928065606694 1306,173 C 1327.7980695086592,163.5071934393306 1340.2280198596168,142.1449124112373 1361,138 C 1381.7719801403832,133.8550875887627 1410.8859900701916,146.92754379438134 1440,160 C 1440,160 1440,400 1440,400 Z"
                        stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4"
                        className="transition-all duration-300 ease-in-out delay-150 path-1"
                        transform="rotate(-180 720 200)"></path>
                    <defs>
                        <linearGradient id="gradient" x1="40%" y1="1%" x2="60%" y2="99%">
                            <stop offset="5%" stop-color="#1b5c76"></stop>
                            <stop offset="95%" stop-color="#121212"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        d="M 0,400 C 0,400 0,240 0,240 C 22.97322866335248,233.91258299946193 45.94645732670496,227.82516599892386 67,225 C 88.05354267329504,222.17483400107614 107.18739935653264,222.6119190037665 135,219 C 162.81260064346736,215.3880809962335 199.3039452471645,207.72715798601016 223,215 C 246.6960547528355,222.27284201398984 257.5968196548094,244.47944905219296 281,246 C 304.4031803451906,247.52055094780704 340.3087761335981,228.35504580521797 366,221 C 391.6912238664019,213.64495419478203 407.16807581079837,218.10036772693522 430,232 C 452.83192418920163,245.89963227306478 483.0189206232085,269.243483287041 506,268 C 528.9810793767915,266.756516712959 544.756241696368,240.92569912490077 571,236 C 597.243758303632,231.07430087509923 633.9561125913195,247.0537202133557 660,249 C 686.0438874086805,250.9462797866443 701.4193079383541,238.8594200216765 719,234 C 736.5806920616459,229.1405799783235 756.3666556552638,231.50859969993834 784,233 C 811.6333443447362,234.49140030006166 847.1140694405905,235.10618117857007 871,242 C 894.8859305594095,248.89381882142993 907.1770665823747,262.06667558578147 928,266 C 948.8229334176253,269.93332441421853 978.177664229911,264.62711647830406 1003,260 C 1027.822335770089,255.3728835216959 1048.112276497981,251.42485850100215 1072,241 C 1095.887723502019,230.57514149899785 1123.373229778165,213.6734495176873 1149,210 C 1174.626770221835,206.3265504823127 1198.394804389358,215.88134342824875 1225,225 C 1251.605195610642,234.11865657175125 1281.0475526644036,242.8011767693176 1305,245 C 1328.9524473355964,247.1988232306824 1347.4149849530274,242.91394949448068 1369,241 C 1390.5850150469726,239.08605050551932 1415.2925075234862,239.54302525275966 1440,240 C 1440,240 1440,400 1440,400 Z"
                        stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53"
                        className="transition-all duration-300 ease-in-out delay-150 path-2"
                        transform="rotate(-180 720 200)"></path>
                    <defs>
                        <linearGradient id="gradient" x1="40%" y1="1%" x2="60%" y2="99%">
                            <stop offset="5%" stop-color="#1b5c76"></stop>
                            <stop offset="95%" stop-color="#121212"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        d="M 0,400 C 0,400 0,320 0,320 C 21.709910777265577,324.033315944942 43.419821554531154,328.066631889884 70,335 C 96.58017844546885,341.933368110116 128.030624559141,351.7667883854059 154,348 C 179.969375440859,344.2332116145941 200.4576802089049,326.86621456849224 226,323 C 251.5423197910951,319.13378543150776 282.13865460523937,328.76835334062525 301,335 C 319.86134539476063,341.23164665937475 326.9877013701375,344.0603720690067 349,347 C 371.0122986298625,349.9396279309933 407.9105399142107,352.99015838334793 434,347 C 460.0894600857893,341.00984161665207 475.3701389730196,325.9789943976017 498,317 C 520.6298610269804,308.0210056023983 550.6089041937113,305.09386402624534 574,314 C 597.3910958062887,322.90613597375466 614.1942442521353,343.64554949741705 637,348 C 659.8057557478647,352.35445050258295 688.6141187977477,340.3239379840863 716,338 C 743.3858812022523,335.6760620159137 769.3492805568737,343.0586985662378 790,340 C 810.6507194431263,336.9413014337622 825.9887589747574,323.44126775096265 854,316 C 882.0112410252426,308.55873224903735 922.6956835440972,307.1762304299116 949,308 C 975.3043164559028,308.8237695700884 987.2285068488547,311.853810529391 1007,313 C 1026.7714931511453,314.146189470609 1054.3902890604843,313.4085274525244 1082,320 C 1109.6097109395157,326.5914725474756 1137.2103369092074,340.51207966051135 1159,343 C 1180.7896630907926,345.48792033948865 1196.7683633026868,336.54315390542996 1217,337 C 1237.2316366973132,337.45684609457004 1261.7162098800459,347.3153047177689 1287,339 C 1312.2837901199541,330.6846952822311 1338.3667971771297,304.19562722349457 1364,298 C 1389.6332028228703,291.80437277650543 1414.8166014114352,305.90218638825274 1440,320 C 1440,320 1440,400 1440,400 Z"
                        stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-3"
                        transform="rotate(-180 720 200)"></path>
                </svg>
            </div>
        </div>
    )
}
