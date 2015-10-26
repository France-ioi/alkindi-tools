var sLimitRef = 20;
var sMapLang = new Map();
var sObjects = null;
var sKeys = null;
var sData = null;
var sLastAlpha = true;
var sSub = null;
var sArrayAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var sTokens = null;
var sFrqAlpha = true;
var sSubInput = true;
var sArrayRef = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var sMinifyInput = false;
var sMinifyFrq = false;
var sMinifyRef = false;
var sMinifySub = false;
var sMinifyOutput = false;
var sTextInput = "Hk dwhrsd oktrhdtqr ezlhkkdr c’zsszptdr bqxoszmzkxshptdr, kdr oktr bnmmtdr dszms k’zmzkxrd eqdptdmshdkkd, kz bqxoszmzkxrd cheedqdmshdkkd ds kz bqxoszmzkxrd khmdzhqd. K’zmzkxrd eqdptdmshdkkd, cdbntudqs zt hwd rhèbkd ozq Zk-Jhmch, dwzlhmd kdr qdodshshnmr cdr kdssqdr ct ldrrzfd bgheeqd zehm cd sqntudq kz bkd. Dkkd drs hmdeehbzbd bnmsqd kdr bgheeqdldmsr lncdqmdr sdkr ptd CDR, QRZ. Dkkd drs oqhmbhozkdldms tshkhrdd bnmsqd kdr bgheeqdldmsr lnmn-zkogzadshptdr pth rtarshstdms bgzptd kdssqd ozq tmd ztsqd ds pth oqdrdmsdms tm ahzhr rszshrshptd. K’hmchbd cd bnhmbhcdmbd, hmudmsd dm 1920 ozq Vhkkhzl E. Eqhdclzm, odqlds cd bzkbtkdq kz oqnazahkhsd cd qdodshshnmr cdr kdssqdr ct ldrrzfd bgheeqd. Hk drs rntudms bntokd zudb k’zmzkxrd eqdptdmshdkkd. Bdkz odqlds cd rzunhq kd sxod cd bgheeqdldms c’tm ldrrzfd (bgheeqdldms lnmn-zkogzadshptd nt onkx-zkogzadshptd) zhmrh ptd kz knmftdtq oqnazakd cd kz bkd. K’zsszptd ozq lns oqnazakd bnmrhrsd à rtoonrdq k’dwhrsdmbd c’tm lns oqnazakd czmr kd ldrrzfd bgheeqd. Hk drs cnmb onrrhakd c’dm cdcthqd kz bkd ct ldrrzfd rh kd lns bgnhrh drs bnqqdbs. Bd sxod c’zsszptd z dsd ldmd bnmsqd kz lzbghmd Dmhflz ctqzms kz Rdbnmcd Ftdqqd lnmchzkd."

//var sTextInput = "Mb dszqubobmztf ftu mb tdjfodf rvj dpotjtuf b ufoufs ef efdijggsfs vo nfttbhf bzbou fuf dijggsf tbot qpttfefs mb dmf ef dijggsfnfou. Mf qspdfttvt qbs mfrvfm po ufouf ef dpnqsfoesf vo nfttbhf fo qbsujdvmjfs ftu bqqfmf vof buubrvf. Vof buubrvf ftu tpvwfou dbsbdufsjtff qbs mft epoofft rv'fmmf ofdfttjuf : buubrvf tvs ufyuf dijggsf tfvm (djqifsufyu-pomz fo bohmbjt) : mf dszqubobmztuf qpttfef eft fyfnqmbjsft dijggsft eft nfttbhft, jm qfvu gbjsf eft izqpuiftft tvs mft nfttbhft psjhjobvy rv'jm of qpttfef qbt. Mb dszqubobmztf ftu qmvt bsevf ef qbs mf nborvf e'jogpsnbujpot b ejtqptjujpo. buubrvf b ufyuf dmbjs dpoov (lopxo-qmbjoufyu buubdl fo bohmbjt) : mf dszqubobmztuf qpttfef eft nfttbhft pv eft qbsujft ef nfttbhft fo dmbjs bjotj rvf mft wfstjpot dijggsfft. Mb dszqubobmztf mjofbjsf gbju qbsujf ef dfuuf dbufhpsjf. buubrvf b ufyuf dmbjs dipjtj (diptfo-qmbjoufyu buubdl fo bohmbjt) : mf dszqubobmztuf qpttfef eft nfttbhft fo dmbjs, jm qfvu dsffs mft wfstjpot dijggsfft ef dft nfttbhft bwfd m'bmhpsjuinf rvf m'po qfvu eft mpst dpotjefsfs dpnnf vof cpîuf opjsf. Mb dszqubobmztf ejggfsfoujfmmf ftu vo fyfnqmf e'buubrvf b ufyuf dmbjs dipjtj. buubrvf b ufyuf dijggsf dipjtj (diptfo-djqifsufyu buubdl fo bohmbjt) : mf dszqubobmztuf qpttfef eft nfttbhft dijggsft fu efnboef mb wfstjpo fo dmbjs ef dfsubjot ef dft nfttbhft qpvs nfofs m'buubrvf. Gbnjmmft e'buubrvft dszqubobmzujrvft Jm fyjtuf qmvtjfvst gbnjmmft e'buubrvft dszqubobmzujrvft, mft qmvt dpoovft fubou m'bobmztf gsfrvfoujfmmf, mb dszqubobmztf ejggfsfoujfmmf fu mb dszqubobmztf mjofbjsf. M'bobmztf gsfrvfoujfmmf Bsujdmf efubjmmf : Bobmztf gsfrvfoujfmmf. M'bobmztf gsfrvfoujfmmf, efdpvwfsu bv jyf tjfdmf qbs Bm-Ljoej, fybnjof mft sfqfujujpot eft mfuusft ev nfttbhf dijggsf bgjo ef uspvwfs mb dmf. Fmmf ftu jofggjdbdf dpousf mft dijggsfnfout npefsoft ufmt rvf EFT, STB. Fmmf ftu qsjodjqbmfnfou vujmjtff dpousf mft dijggsfnfout npop-bmqibcfujrvft rvj tvctujuvfou dibrvf mfuusf qbs vof bvusf fu rvj qsftfoufou vo cjbjt tubujtujrvf. M'joejdf ef dpjodjefodf Bsujdmf efubjmmf : Joejdf ef dpjodjefodf. M'joejdf ef dpjodjefodf, jowfouf fo 1920 qbs Xjmmjbn G. Gsjfenbo, qfsnfu ef dbmdvmfs mb qspcbcjmjuf ef sfqfujujpot eft mfuusft ev nfttbhf dijggsf. Jm ftu tpvwfou dpvqmf bwfd m'bobmztf gsfrvfoujfmmf. Dfmb qfsnfu ef tbwpjs mf uzqf ef dijggsfnfou e'vo nfttbhf (dijggsfnfou npop-bmqibcfujrvf pv qpmz-bmqibcfujrvf) bjotj rvf mb mpohvfvs qspcbcmf ef mb dmf. M'buubrvf qbs npu qspcbcmf Bsujdmf efubjmmf : Buubrvf qbs npu qspcbcmf. M'buubrvf qbs npu qspcbcmf dpotjtuf b tvqqptfs m'fyjtufodf e'vo npu qspcbcmf ebot mf nfttbhf dijggsf. Jm ftu epod qpttjcmf e'fo efevjsf mb dmf ev nfttbhf tj mf npu dipjtj ftu dpssfdu. Df uzqf e'buubrvf b fuf nfof dpousf mb nbdijof Fojhnb evsbou mb Tfdpoef Hvfssf npoejbmf. M'buubrvf qbs ejdujpoobjsf Bsujdmf efubjmmf : Buubrvf qbs ejdujpoobjsf. M'buubrvf qbs ejdujpoobjsf dpotjtuf b uftufs upvt mft nput e'vof mjtuf dpnnf npu dmf. Fmmf ftu tpvwfou dpvqmff b m'buubrvf qbs gpsdf csvuf. M'buubrvf qbs gpsdf csvuf Bsujdmf efubjmmf : Buubrvf qbs gpsdf csvuf. M'buubrvf qbs gpsdf csvuf dpotjtuf b uftufs upvuft mft tpmvujpot qpttjcmft ef nput ef qbttf pv ef dmft. D'ftu mf tfvm npzfo ef sfdvqfsfs mb dmf ebot mft bmhpsjuinft mft qmvt npefsoft fu fodpsf jowjpmft dpnnf BFT. Jm ftu qfv vujmjtf qpvs eft nput ef qbttf qpttfebou vo usft hsboe opncsf ef dbsbdufsft dbs mf ufnqt ofdfttbjsf efwjfou bmpst uspq jnqpsubou. Bsujdmf efubjmmf : Buubrvf eft boojwfstbjsft. Mf qbsbepyf eft boojwfstbjsft ftu vo sftvmubu qspcbcjmjtuf rvj ftu vujmjtf ebot mft buubrvft dpousf mft gpodujpot ef ibdibhf. Df qbsbepyf qfsnfu ef epoofs vof cpsof tvqfsjfvsf ef sftjtubodf bvy dpmmjtjpot e'vof ufmmf gpodujpo. Dfuuf mjnjuf ftu ef m'psesf ef mb sbdjof ef mb ubjmmf ef mb tpsujf, df rvj tjhojgjf rvf, qpvs vo bmhpsjuinf dpnnf NE5 (fnqsfjouf tvs 128 cjut), uspvwfs vof dpmmjtjpo rvfmdporvf bwfd 50 % ef dibodf ofdfttjuf 264 ibdibhft e'fousfft ejtujoduft. Eft mft boofft 70 bqqbsbjttfou mft nfuipeft ef dijggsfnfou npefsoft qbs cmpdt dpnnf EFT. Jm tfsb qbttbcmfnfou fuvejf fu buubrvf df rvj nfofsb b eft buubrvft nbkfvsft ebot mf npoef ef mb dszquphsbqijf. Mft nfuipeft qsftfoufft dj-efttpvt of tpou qbt wsbjnfou hfofsjrvft fu eft npejgjdbujpot tpou ofdfttbjsft qpvs buubrvfs vo uzqf ef dijggsfnfou epoof. Tpvwfou, po of t'buubrvf qbt b vof wfstjpo dpnqmfuf ef m'bmhpsjuinf ef dijggsfnfou nbjt vof wbsjbouf bwfd npjot ef upvst (ebot mf dbt eft tdifnbt ef uzqf Gfjtufm pv mft gpodujpot ef ibdibhf). Dfuuf bobmztf qsfmjnjobjsf, tj fmmf qfsnfu ef efdfmfs eft wvmofsbcjmjuft, mbjttf fousfwpjs vof buubrvf tvs m'bmhpsjuinf dpnqmfu. Dszqubobmztf mjofbjsf Bsujdmf efubjmmf : Dszqubobmztf mjofbjsf. Mb dszqubobmztf mjofbjsf, evf b Njutvsv Nbutvj, dpotjtuf b gbjsf vof bqqspyjnbujpo mjofbjsf ef mb tusvduvsf joufsof ef mb nfuipef ef dijggsfnfou. Fmmf sfnpouf b 1993 fu t'bwfsf êusf m'buubrvf mb qmvt fggjdbdf tvs EFT. Mft bmhpsjuinft qmvt sfdfout tpou jotfotjcmft b dfuuf buubrvf. Bsujdmf efubjmmf : Dszqubobmztf ejggfsfoujfmmf. Mb dszqubobmztf ejggfsfoujfmmf ftu vof bobmztf tubujtujrvf eft dibohfnfout ebot mb tusvduvsf ef mb nfuipef ef dijggsfnfou bqsft bwpjs mfhfsfnfou npejgjf mft fousfft. Bwfd vo usft hsboe opncsf ef qfsuvscbujpot, jm ftu qpttjcmf e'fyusbjsf mb dmf. Dfuuf buubrvf ebuf ef 1990 (qsftfouff b mb dpogfsfodf Dszqup 90). Fmmf ftu evf b Fmj Cjibn fu Bej Tibnjs. Upvufgpjt, po tbju nbjoufobou rvf mft dpodfqufvst ef EFT dpoobjttbjfou vof wbsjbouf ef dfuuf buubrvf opnnff buubrvf-U. Mft bmhpsjuinft sfdfout (BFT, JEFB, fud.) tpou dpoçvt qpvs sftjtufs b df uzqf e'buubrvf. Mft buubrvft ejggfsfoujfmmft tpou bvttj qpttjcmft tvs mft gpodujpot ef ibdibhf, npzfoobou eft npejgjdbujpot ebot mb dpoevjuf ef m'buubrvf. Vof ufmmf buubrvf b fuf nfoff dpousf NE5. Bsujdmf efubjmmf : Dszqubobmztf ejggfsfoujfmmf-mjofbjsf. Jouspevjuf qbs Nbsujo Ifmmnbo fu Mbohgpse fo 1994, mb dszqubobmztf ejggfsfoujfmmf-mjofbjsf dpncjof mft efvy qsjodjqft. M'buubrvf ejggfsfoujfmmf qspevju vof bqqspyjnbujpo mjofbjsf ef m'bmhpsjuinf. Bwfd dfuuf buubrvf, Ifmmnbo fu Mbohgpse pou qv buubrvfs vo EFT ef 8 spoeft bwfd tfvmfnfou 512 ufyuft fo dmbjs fu rvfmrvft tfdpoeft tvs vo QD ef m'fqprvf. Dfuuf nfuipef b fhbmfnfou fuf fnqmpzff qpvs uspvwfs eft dmft gbjcmft ebot JEFB. Df uzqf ef dszqubobmztf b fuf bnfmjpsff qbs Fmj Cjibn fo 2002. Bsujdmf efubjmmf : Buubrvf YTM. Mb dszqubobmztf rvbesbujrvf ftu vof jowfoujpo sfdfouf ef Ojdpmbt Dpvsupjt fu Kptfg Qjfqsazl. Dfuuf buubrvf (opnnff buubrvf YTM) wjtf fo qbsujdvmjfs BFT fu mft bvusft dijggsfnfout cbtft tvs Sjkoebfm. M'buubrvf YTM ftu mf tvkfu ef cfbvdpvq ef dpouspwfstft rvbou b tb wfsjubcmf fggjdbdjuf ef qbs tb obuvsf ifvsjtujrvf. Fmmf dpotjtuf b sftpvesf vo tztufnf e'frvbujpot ef usft hsboef ubjmmf. Bsujdmf efubjmmf : Dszqubobmztf npe o. Tvhhfsff qbs Csvdf Tdiofjfs, Ebwje Xbhofs fu Kpio Lfmtfz fo 1999, dfuuf ufdiojrvf dpotjtuf b fyqmpjufs mft ejggfsfodft ef gpodujpoofnfou (tfmpo vof dpohsvfodf wbsjbcmf) eft bmhpsjuinft rvj vujmjtfou eft spubujpot cjobjsft. Buubrvft qbs dbobm bvyjmjbjsf Bsujdmf efubjmmf : Buubrvf qbs dbobm bvyjmjbjsf. Mft buubrvft qbs dbobvy bvyjmjbjsft gpou qbsujf e'vof wbtuf gbnjmmf ef ufdiojrvft dszqubobmzujrvft rvj fyqmpjufou eft qspqsjfuft jobuufoevft e'vo bmhpsjuinf ef dszquphsbqijf mpst ef tpo jnqmfnfoubujpo mphjdjfmmf pv nbufsjfmmf. Fo fggfu, vof tfdvsjuf « nbuifnbujrvf » of hbsbouju qbt gpsdfnfou vof tfdvsjuf mpst ef m'vujmjtbujpo fo « qsbujrvf ». Mft buubrvft qpsufou tvs ejggfsfout qbsbnfusft : mf ufnqt, mf csvju, mb dpotpnnbujpo fmfdusjrvf, fud. Dpnqspnjt ufnqt/nfnpjsf Df dpodfqu b fuf jouspevju qbs Nbsujo Ifmmnbo fo 1980. Jm b fuf bnfmjpsf fo 1993 qbs Qijmjqqf Pfditmjo bwfd mf dpodfqu ef ubcmf bsd-fo-djfm, rvj mvj b qfsnjt qbs fyfnqmf e'buubrvfs mft nput ef qbttf ef tfttjpot Xjoepxt, mpstrv'jmt tpou tupdlft bv gpsnbu MboNbobhfs, dpnnf d'ftu fodpsf mf dbt mf qmvt tpvwfou. Jm t'bhju e'vo dpnqspnjt fousf vof buubrvf qbs gpsdf csvuf fu m'vujmjtbujpo ef ejdujpoobjsft. Vof sfdifsdif fyibvtujwf ofdfttjuf fo fggfu cfbvdpvq ef ufnqt bmpst rv'vo ejdujpoobjsf ef upvt mft nput ef qbttf qpttjcmft ofdfttjufsbju fopsnfnfou ef qmbdf. Hsâdf b eft qspdfeft bmhpsjuinjrvft, po difsdif b uspvwfs vo kvtuf njmjfv fousf dft efvy qsjodjqft, fo dpotusvjtbou eft ubcmft ef ubjmmf hfsbcmf. Buubrvft tvs mft npeft pqfsbupjsft Mft dijggsfnfout qbs cmpd dpnnf EFT pv BFT of qfvwfou dijggsfs rv'vo cmpd ef ubjmmf epooff (128 cjut ebot mf dbt e'BFT). Qpvs dijggsfs eft epoofft qmvt mpohvft, po vujmjtf eft npeft pqfsbupjsft. Vo npef pqfsbupjsf ftu mb nbojfsf ef dibîofs qmvtjfvst cmpdt fotfncmf qpvs pcufojs vo dijggsfnfou qbs gmvy. Qbs fyfnqmf, po qfvu efdpvqfs mft epoofft fo cmpdt ef 128 cjut fu mft dijggsfs tfqbsfnfou. D'ftu mf npef FDC rvj ftu wvmofsbcmf qvjtrvf mb qsftfodf ef efvy cmpdt dijggsft jefoujrvft joejrvf rvf mft efvy cmpdt sftqfdujgt ebot mf nfttbhf psjhjobm tpou fhbmfnfou jefoujrvft. E'bvusft npeft fwjufou df qspcmfnf nbjt of tpou qbt upubmfnfou fyfnqut ef wvmofsbcjmjuft. Po vujmjtf bmpst eft wfdufvst e'jojujbmjtbujpo rvj qfsnfuufou e'fwjufs mb sfqfujujpo ef tfrvfodft jefoujrvft fousf qmvtjfvst nfttbhft dijggsft. Mft dijggsfnfout qbs gmpu (qbs fyfnqmf SD4) vujmjtfou bvttj vo wfdufvs e'jojujbmjtbujpo qpvs mft nênft sbjtpot. Vof ufmmf buubrvf b fuf sfdfnnfou nfoff b df qspqpt tvs mf dijggsfnfou eft epdvnfout ef mb tvjuf Njdsptpgu Pggjdf, rvj fnqmpjf SD4. Mf wfdufvs e'jojujbmjtbujpo z ftu upvkpvst mf nênf qpvs vo epdvnfou epoof ; vo hsboe opncsf e'jogpsnbujpot qfvwfou epod êusf sfdvqfsfft fo dpnqbsbou mf sftvmubu ev dijggsfnfou e'vo epdvnfou bqsft mfhfsf npejgjdbujpo1. Buubrvf qbs sfodpousf bv njmjfv Dijggsfs efvy gpjt bwfd mf nênf bmhpsjuinf nbjt wjb efvy dmft ejggfsfouft ftu vof pvwfsuvsf b vof buubrvf ef uzqf sfodpousf bv njmjfv. Mf dijggsfnfou pcufov o'ftu qbt frvjwbmfou b vo dijggsfnfou bwfd vof dmf efvy gpjt qmvt mpohvf (po of qbttf qbt ef 256 b 2112 ebot mf dbt ef EFT). Jm tvggju fo fggfu e'fttbzfs upvuft mft dmft qpvs efdijggsfs mb qsfnjfsf fubqf. Po pcujfou vo sftvmubu, upvkpvst dijggsf, rvj tf uspvwf fousf mft efvy cmpdt ef dijggsfnfou. Df sftvmubu ftu tpvnjt b tpo upvs b vof sfdifsdif fyibvtujwf bwfd upvuft mft dmft qpttjcmft. Gjobmfnfou, mb dpnqmfyjuf ftu tfvmfnfou nvmujqmjff qbs efvy. Ebot mf dbt ef EFT, po pcujfou vof sftjtubodf ef m'psesf ef 257, d'ftu qpvsrvpj po vujmjtf 3EFT rvj b vof dpnqmfyjuf gjobmf ef 2112 pqfsbujpot (nbmhsf vof dmf qmvt mpohvf ef 3*56 cjut). Hsâdf b uspjt dijggsfnfout, dibrvf tpsujf ev efvyjfnf cmpd ef dijggsfnfou epju êusf fttbzff bwfd upvuft mft dmft, df rvj bvhnfouf dpotjefsbcmfnfou mf opncsf ef qpttjcjmjuft. Buubrvft tvs mft tztufnft btznfusjrvft Dbttfs vo dijggsfnfou bttvsf qbs ef mb dszquphsbqijf btznfusjrvf ofdfttjuf e'bvusft bqqspdift. Ebot mf dbt ef STB, d'ftu mb ejggjdvmuf ef mb gbdupsjtbujpo rvj bttvsf mb sftjtubodf ev dijggsfnfou. Qpvs FmHbnbm, d'ftu mf qspcmfnf ev mphbsjuinf ejtdsfu rvj ftu fnqmpzf. Upvufgpjt, dfsubjoft gbjmmft qfvwfou bqqbsbîusf tfmpo m'vujmjtbujpo rvf m'po gbju ef dft bmhpsjuinft. STB ftu wvmofsbcmf tj eft fyqptbout ef gbjcmf nbhojuvef tpou vujmjtft (buubrvft ef Epo Dpqqfstnjui fu Xjfofs). Tpvt eft dpoejujpot qbsujdvmjfsft, vo tvsdijggsfnfou bwfd STB qfvu êusf buubrvf. Mf tuboebse QLDT bttvsf vof vujmjtbujpo qmvt spcvtuf ef STB, nênf tj mft qsfnjfsft fcbvdift ev tuboebse fubjfou tfotjcmft b eft buubrvft qbs eft dbobvy bvyjmjbjsft (Cmfjdifocbdifs). Bvusft qspqsjfuft bobmztfft Dfsubjoft qspqsjfuft pctfswfft ebot mft bmhpsjuinft ef dijggsfnfou of nfofou qbt gpsdfnfou b eft buubrvft nbjt qfsnfuufou ef efdfmfs eft gbjcmfttft ebot mb dpodfqujpo, qspcmfnft rvj qfvwfou fo dbdifs e'bvusft qmvt jnqpsubout. Mft dmft gbjcmft Bsujdmf efubjmmf : Dmf gbjcmf. Dfsubjot bmhpsjuinft tpou tvtdfqujcmft e'bwpjs eft dmft ejuft gbjcmft. Tj vof ufmmf dmf ftu vujmjtff qpvs dijggsfs vo nfttbhf vof qsfnjfsf gpjt fu rvf m'po sfdijggsf mf sftvmubu, upvkpvst bwfd mb nênf dmf, bmpst po pcujfou mf nfttbhf fo dmbjs. Qmvt gpsnfmmfnfou, Fl(Fl(n))=n. EFT qpttfef 4 dmft ef df hfosf. Jm z b bvttj eft dmft ejuft tfnj-gbjcmft. Ebot df dbt, Fl1(Fl2(n))=n. Cjbjt tubujtujrvf Bsujdmf efubjmmf : Cjbjt (tubujtujrvf). Po qfvu difsdifs tj mb tusvduvsf ef dijggsfnfou qspevju eft cjbjt tubujtujrvft. Fo hfofsbm, vo bmhpsjuinf ef dijggsfnfou ftu dfotf qspevjsf vo sftvmubu qspdif e'vo hfofsbufvs ef opncsft bmfbupjsft vojgpsnfnfou ejtusjcvft, ef nbojfsf b epoofs mf npjot e'jogpsnbujpo qpttjcmf fu nbyjnjtfs m'fouspqjf. Tj vo cjbjt ftu pctfswf (qbs fyfnqmf, po pctfswf qmvt ef cjut b 1 rvf ef cjut b 0) bmpst eft bobmztft tvqqmfnfoubjsft qfvwfou qbsgpjt qfsnfuusf ef dpodfwpjs vof buubrvf. Djupot fousf bvusft eft buubrvft tvs SD6 epou mft qfsnvubujpot t'fdbsufou tfotjcmfnfou eft dbsbdufsjtujrvft opsnbmfnfou pctfswfft ebot mft hfofsbufvst ef opncsft qtfvep-bmfbupjsft."

function generateChartsContent(iFont, iKeys, iData) {
    var lContent = {
	legend: {
	    enabled: false
	},
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: iKeys,
            crosshair: true,
	    labels: {
		style: {
		    fontFamily: iFont,
		    fontSize: '16px'
		}
	    }
        },
	yAxis: {
	    title: {
		text: ''
	    }
	},
        tooltip: {
            headerFormat: '<span><span style="font-weight: bold; font-family: ' + iFont+ '; font-size:16px;">{point.key}</span>:&nbsp;{point.y:1f}&nbsp;%</span><table>',
            pointFormat: '',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: [{
            name: 'fréquence',
            data: iData
        }],
	exporting: {
            enabled: false
	},
	credits: {
	    enabled: false
	}
    };
    return lContent;
}

function initRefLang() {
    // src https://fr.wikipedia.org/wiki/Fr%C3%A9quence_d%27apparition_des_lettres_en_fran%C3%A7ais
    var lFr = new Map();
    lFr.set('a', 7.637);
    lFr.set('b', 0.901);
    lFr.set('c', 3.260);
    lFr.set('d', 3.669);
    lFr.set('e', 14.715);
    lFr.set('f', 1.066);
    lFr.set('g', 0.866);
    lFr.set('h', 0.737);
    lFr.set('i', 7.529);
    lFr.set('j', 0.545);
    lFr.set('k', 0.049);
    lFr.set('l', 5.456);
    lFr.set('m', 2.968);
    lFr.set('n', 7.095);
    lFr.set('o', 5.378);
    lFr.set('p', 3.021);
    lFr.set('q', 1.362);
    lFr.set('r', 6.553);
    lFr.set('s', 7.948);
    lFr.set('t', 7.244);
    lFr.set('u', 6.311);
    lFr.set('v', 1.628);
    lFr.set('w', 0.114);
    lFr.set('x', 0.387);
    lFr.set('y', 0.308);
    lFr.set('z', 0.136);

    sMapLang.set("fr", lFr);

    // src: https://en.wikipedia.org/wiki/Letter_frequency
    var lEn = new Map();
    lEn.set('a', 11.602);
    lEn.set('b', 4.702);
    lEn.set('c', 3.511);
    lEn.set('d', 2.670);
    lEn.set('e', 2.007);
    lEn.set('f', 3.779);
    lEn.set('g', 1.950);
    lEn.set('h', 7.232);
    lEn.set('i', 6.286);
    lEn.set('j', 0.597);
    lEn.set('k', 0.590);
    lEn.set('l', 2.705);
    lEn.set('m', 4.383);
    lEn.set('n', 2.365);
    lEn.set('o', 6.264);
    lEn.set('p', 2.545);
    lEn.set('q', 0.173);
    lEn.set('r', 1.653);
    lEn.set('s', 7.755);
    lEn.set('t', 16.671);
    lEn.set('u', 1.487);
    lEn.set('v', 0.649);
    lEn.set('w', 6.753);
    lEn.set('x', 0.017);
    lEn.set('y', 1.620);
    lEn.set('z', 0.034);

    sMapLang.set("en", lEn);
}

function getMapId() {
    var lRes = new Array();
    for (var i = 0; i < sArrayAlpha.length; ++i) {
	var lValue = sArrayAlpha[i];
	lRes.push({key: lValue, value : lValue});
    }
    return lRes;
}

function accentReplace(str) {
    str = str.replace(/[ÂÃÄÀÁÅ]/gi, "A");
    str = str.replace(/[Ç]/gi,      "C");
    str = str.replace(/[ÈÉÊË]/gi,   "E");
    str = str.replace(/[ÌÍÎÏ]/gi,   "I");
    str = str.replace(/[Ð]/gi,      "D");
    str = str.replace(/[Ñ]/gi,      "N");
    str = str.replace(/[ÒÓÔÕÖØ]/gi, "O");
    str = str.replace(/[ÙÚÛÜ]/gi,   "U");
    str = str.replace(/[Ý]/gi,      "Y");
    str = str.replace(/[àáâãäå]/gi, "a");
    str = str.replace(/[ç]/gi,      "c");
    str = str.replace(/[èéêë]/gi,   "e");
    str = str.replace(/[ìíîï]/gi,   "i");
    str = str.replace(/[ñ]/gi,      "n");
    str = str.replace(/[òóôõöø]/gi, "o");
    str = str.replace(/[ùúûü]/gi,   "u");
    str = str.replace(/[ýÿ]/gi,     "y");
    return str;
}

function textToTokens(iText, iOptions) {
    var lWithSpace       = false;
    var lWithPunctuation = false;
    var lWithAccent      = false;
    var lWithDigit       = false;
    var lWithUpperCase   = false;

    if (iOptions !== undefined) {
	lWithSpace       = iOptions.withSpace;
	lWithPunctuation = iOptions.withPunctuation;
	lWithAccent      = iOptions.withAccent;
	lWithDigit       = iOptions.withDigit;
	lWithUpperCase   = iOptions.withUpperCase;
    }

    var lTokens = new Array();
    for (var i = 0, len = iText.length; i < len; i++) {
	var lRef = iText[i];
	var lValue = lRef;
	var lMute = false;
	var lWithAccent = false;
	var lFromUpperCase = false;

	if (!lWithSpace && lRef.match('[ \t]')) {
	    lMute = true;
	}

	if (!lWithPunctuation && lRef.match('[\u2000-\u206F\u2E00-\u2E7F\\\'!"#$%&()*+,\-.\/:;<=>?@_`{|}~^\\[\\]]')) {
	    lMute = true;
	}

	if (!lWithAccent) {
	    lValue = accentReplace(lValue);
	    if (lValue !== lRef) {
		lWithAccent = true;
	    }
	}

	if (!lWithDigit && lRef.match('[0-9]')) {
	    lMute = true;
	}

	if (!lWithUpperCase) {
	    lValue = lValue.toLowerCase();
	    if (lValue !== lRef) {
		lFromUpperCase = true;
	    }
	}

	lTokens.push({ref: lRef, value: lValue, output: lValue, mute: lMute, withAccent: lWithAccent, fromUpperCase: lFromUpperCase});
    }
    var lFont = getAlphaFont();
    return {font: lFont, tokens: lTokens};
}

function tokensToText(iTokens) {
    var lStr = "";
    var lTokens = iTokens.tokens;

    for (var i = 0, len = lTokens.length; i < len; i++) {
	var lToken = lTokens[i];

	var lValue = lToken.output;
	if (lToken.fromUpperCase) {
	    lValue = lValue.toUpperCase();
	}
	lStr += lValue;

    }
    return lStr;
}

function computeMapFrq(iTokens) {
    var lMap = new Map();
    var lSize = 0;
    var lTokens = iTokens.tokens;

    for (var i = 0, len = lTokens.length; i < len; i++) {
	var lToken = lTokens[i];

	var lValue = lToken.value;
	var lMute = lToken.mute;

	if (!lMute) {
	    if (lMap.get(lValue) === undefined) {
		lMap.set(lValue, 0);
	    }
	    lMap.set(lValue, lMap.get(lValue) + 1);
	    ++lSize;
	}
    }
    return {size: lSize, map: lMap};
}

function sortFrq(iObjects, iWithKey) {
    iObjects.sort(function (i1, i2) {
	var lItem1 = iWithKey ? i1.key : i1.value;
	var lItem2 = iWithKey ? i2.key : i2.value;
	var lRes  = iWithKey ? 1 : -1;

	if (lItem1 < lItem2) {
	    return -lRes;
	} else if (lItem1 > lItem2) {
	    return lRes;
	}
	return 0;
    });
}

function computeObjects(iMapFrq) {
    sKeys = new Array();
    sData = new Array();
    sObjects = new Array();
    var lSize = iMapFrq.size;

    sObjects = [];
    iMapFrq.map.forEach(function (value, key) {
	var lV = (value / lSize * 100);
	var lVal = lV.toFixed(2) / 1;
	sObjects.push({key: key, value: lVal});
    });
}

function clickApplyInput() {
    var lTextInput       = $('textarea#textarea-input').val();

    var lWithSpace       = document.getElementById('optionWithSpace').checked;
    var lWithPunctuation = document.getElementById('optionWithPunctuation').checked;
    var lWithAccent      = document.getElementById('optionWithAccent').checked;
    var lWithDigit       = document.getElementById('optionWithDigit').checked;
    var lWithUpperCase   = document.getElementById('optionWithUpperCase').checked;

    var lOptions = {
	withSpace: lWithSpace,
	withPunctuation: lWithPunctuation,
	withAccent: lWithAccent,
	withDigit: lWithDigit,
	withUpperCase: lWithUpperCase
    };

    $('#root').addClass('apply');

    sTokens = textToTokens(lTextInput, lOptions);
    var lMapFrq = computeMapFrq(sTokens);
    var lFont = sTokens.font;
    computeObjects(lMapFrq);
    sLastAlpha = $('input[name="frq"]:checked').val() === "alpha";
    updateChartText(lFont);
    var lMapId = getMapId();
    updateSub(lMapId, lFont);
    displayOutput(sTokens);
}

function updateChartText(iFont) {
    if (sObjects !== undefined &&
	sObjects != null) {
	sortFrq(sObjects, sLastAlpha);

	sKeys = [];
	sData = [];
	for (var i = 0, len = sObjects.length; i < len && i < sLimitRef; i++) {
	    var lItem = sObjects[i];
	    sKeys.push(lItem.key);
	    sData.push(lItem.value);
	}
	for (var i = sObjects.length; i < sLimitRef; ++i) {
	    sKeys.push("");
	    sData.push(0);
	}
    }
    var lContent = generateChartsContent(iFont, sKeys, sData);
    $('#chart-text').highcharts(lContent);
}

function changeFrq() {
    var lFrqAlpha = $('input[name="frq"]:checked').val() === "alpha";
    if (sLastAlpha != lFrqAlpha) {
	sLastAlpha = lFrqAlpha;
	updateChartText(sTokens.font);
    }
}

function changeFrqRefLanguage() {
    var lKeys = new Array();
    var lData = new Array();
    var lLang = $('#frq-ref-language').val();

    var lObjects = new Array();
    var lMap = sMapLang.get(lLang);
    lMap.forEach(function (value, key) {
	lObjects.push({key: key, value: value});
    });

    sortFrq(lObjects, false);


    for (var i = 0, len = lObjects.length; i < sLimitRef; i++) {
	var lItem = lObjects[i];

	lKeys.push(lItem.key);
	lData.push(lItem.value);
    }

    var lContent = generateChartsContent('Fréquence', lKeys, lData);
    $('#chart-ref').highcharts(lContent);
}

function updateSub(iMap, iFontKey) {
    $('#sub').empty();
    var lSubElement = document.getElementById('sub');
    var paper = Raphael(lSubElement, 680, 100);

    var dragAndDrop = DragAndDropSystem({
	paper : paper,
	actionIfDropped : function(srcCont, srcPos, dstCont, dstPos, type)
	{
	    if(dstCont == null)
		return false;
	    return true;
	},
	drop: function(srcCont, srcPos, dstCont, dstPos, type) {
	    generateNewSub(srcCont, srcPos, dstCont, dstPos, type);
	}
    });


    var size = iMap.length;
    var w = 25, h = 25;
    dragAndDropContainer = dragAndDrop.addContainer({
	ident : 'seq',
	cx : 330,
	cy : 80,
	widthPlace : 25,
	heightPlace : 25,
	nbPlaces : size,
	dropMode : 'swap'
    });

    if (sObjects !== undefined &&
	sObjects != null) {

	sSub = new Array();
	for (var i = 0; i < size; i++) {
	    var lItem = iMap[i];
	    var lKey = lItem.key;
	    var lValue = lItem.value;

	    var u = paper.text(17 + i * 25, 40, lKey).attr({'font-family' : iFontKey, 'font-size': 18, 'font-weight': 'bold'});

	    var c = paper.rect(-w/2,-h/2,w,h).attr('fill', 'white');
	    var t = paper.text(0,0, lValue).attr({'font-size': 14, 'font-weight': 'bold'});
	    var draggable = dragAndDropContainer.createDraggable(i+1, i, [c,t]);
	    sSub.push(lValue);
	}
    }
}

function generateNewSub(srcCont, srcPos, dstCont, dstPos, type) {
/*    if (srcPos < dstPos) {
	var l = sSub[srcPos];
	for (var i = srcPos; i < dstPos; ++i) {
	    sSub[i] = sSub[i + 1];
	}
	sSub[dstPos] = l;
    } else if (srcPos > dstPos) {
	var l = sSub[srcPos];
	for (var i = srcPos; i > dstPos; --i) {
	    sSub[i] = sSub[i - 1];
	}
	sSub[dstPos] = l;
    }*/
    var l = sSub[srcPos];
    sSub[srcPos] = sSub[dstPos];
    sSub[dstPos] = l;

    var lSub = sSub;
    var lMap = new Array();

    for (var i = 0; i < sSub.length; ++i) {
	var lKey = sArrayRef[i];
	var lValue = sSub[i];
	lMap.push({key: lKey, value: lValue});
    }

    updateTokensSub(sTokens, lMap);
    displayOutput(sTokens);
}

function updateTokensSub(iTokens, iMap) {
    if (iTokens != null) {
	var lTokens = iTokens.tokens;
	var lMap = new Map();
	for (var i = 0; i < iMap.length; ++i) {
	    lMap.set(iMap[i].key, iMap[i].value);
	}
	for (var i = 0, len = lTokens.length; i < len; i++) {
	    var lToken = lTokens[i];

	    var lValue = lToken.value;
	    var lSub = lMap.get(lValue);
	    if (lSub !== undefined) {
		lToken.output = lSub;
	    }
	}
    }
}

function displayOutput(iTokens) {
    var lTextOutput = tokensToText(iTokens);
    $('textarea#textarea-output').val(lTextOutput);
}

function getAlphaFont() {
    var lFont = $('#alpha-font option:selected').val();
    return lFont;
}

function changeAlphaFont() {
    var lFont = getAlphaFont();

    if (lFont === 'alien') {
	$('textarea#textarea-input').css('font-family', "alien");
    } else {
	$('textarea#textarea-input').css('font-family', "inherit");
    }
}

function changeSubRadio() {
    var lVersion = $('input[name="sub-radio"]:checked').val();
    if (sSubInput && lVersion === 'generate') {
	sSubInput = false;
	updateSubFromRef();
    } else if (sSubInput && lVersion === 'input') {
	sSubInput = true;

    }
}

function updateSubFromRef() {
    var lFont = sTokens.font;

    var lLang = $('#frq-ref-language').val();

    var lMapRef = sMapLang.get(lLang);
    var lRef = new Array();
    lMapRef.forEach(function (value, key) {
	lRef.push({key: key, value: value});
    });
    sortFrq(lRef, false);

    var lMapFrq = computeMapFrq(sTokens);
    var lFrq = new Array();
    lMapFrq.map.forEach(function (value, key) {
	lFrq.push({key: key, value: value});
    });
    sortFrq(lFrq, false);

    var lMap = new Array();
    sSub = new Array();
    var lMarked = new Array();
    sArrayRef = new Array();
    for (var i = 0; i < lRef.length; ++i) {
	var lKey = getNextAlphaFrom(sArrayRef);
	var lValue = lRef[i].key;
	if (i < lFrq.length) {
	    lKey = lFrq[i].key;
	}
	lMap.push({key: lKey, value: lValue});
	sArrayRef.push(lKey);
	sSub[i] = lValue;
    }
    updateSub(lMap, lFont);
    updateTokensSub(sTokens, lMap);
    displayOutput(sTokens);
}

function getNextAlphaFrom(array) {
    for (var i = 0; i < sArrayAlpha.length; ++i) {
	var lCharacter = sArrayAlpha[i];
	var lFound = false;

	for (var j = 0; j < sArrayRef.length; ++j) {
	    var lAlpha = sArrayRef[j];
	    if (lCharacter === lAlpha) {
		lFound = true;
		break;
	    }
	}
	if (!lFound) {
	    return lCharacter;
	}
    }
    return '_';
}

function minifySection(iBoolean, iButtonId, iSectionId) {
    if (iBoolean) {
	$(iSectionId).addClass('minify');
	$(iButtonId).text('+');
    } else {
	$(iSectionId).removeClass('minify');
	$(iButtonId).text('-');
    }
}

function applySectionButtonInput() {
    minifySection(sMinifyInput, '#section-button-input', '#section-input');
}

function clickSectionButtonInput() {
    sMinifyInput = !sMinifyInput;
    applySectionButtonInput();
}

function applySectionButtonFrq() {
    minifySection(sMinifyFrq, '#section-button-frq', '#section-frq');
}

function clickSectionButtonFrq() {
    sMinifyFrq = !sMinifyFrq;
    applySectionButtonFrq();
    updateChartText(sTokens.font);
    if (sTokens != null) {
	updateChartText(sTokens.font);
    }
}

function applySectionButtonRef() {
    minifySection(sMinifyRef, '#section-button-ref', '#section-ref');
}

function clickSectionButtonRef() {
    sMinifyRef = !sMinifyRef;
    applySectionButtonRef();
    changeFrqRefLanguage();
}

function applySectionButtonSub() {
    minifySection(sMinifySub, '#section-button-sub', '#section-sub');
}

function clickSectionButtonSub() {
    sMinifySub = !sMinifySub;
    applySectionButtonSub();
}

function applySectionButtonOutput() {
    minifySection(sMinifyOutput, '#section-button-output', '#section-output');
}

function clickSectionButtonOutput() {
    sMinifyOutput = !sMinifyOutput;
    applySectionButtonOutput();
}

$(function () {
    initRefLang();
    changeFrqRefLanguage();
    changeAlphaFont();
    applySectionButtonInput();
    applySectionButtonFrq();
    applySectionButtonRef();
    applySectionButtonSub();
    applySectionButtonOutput();
    $('textarea#textarea-input').val(sTextInput);

    $('#apply-input').click(function() {
	clickApplyInput();
    });

    $('#frq-alpha').change(function() {
	changeFrq();
    });

    $('#frq-fqz').change(function() {
	changeFrq();
    });

    $('#sub-input').change(function() {
	changeSubRadio();
    });

    $('#sub-generate').change(function() {
	changeSubRadio();
    });

    $('#frq-ref-language').change(function() {
	changeFrqRefLanguage();
    });

    $('#alpha-font').change(function() {
	changeAlphaFont();
    });

    $('#section-button-input').click(function() {
	clickSectionButtonInput();
    });

    $('#section-button-frq').click(function() {
	clickSectionButtonFrq();
    });

    $('#section-button-ref').click(function() {
	clickSectionButtonRef();
    });

    $('#section-button-sub').click(function() {
	clickSectionButtonSub();
    });

    $('#section-button-output').click(function() {
	clickSectionButtonOutput();
    });
});
