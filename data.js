// ==========================================================================
// 📚 《只要我们有根》课文词典与诗节数据集 (data.js) - 变调规范与四节对齐版
// 结构：共四节 16 行，节内以 ["<br>"] 换行、节间以 ["\n"] 分节，与 analysis.js 1–4 完全对齐
// ==========================================================================

const lessonTitle = "只要我们有根";
const sectionUnit = "节";

const lessonData = [
    // ===== 第1节（第1–3行：失去外在庇护，依然挺然傲立） =====
    ["只要", "zhǐ yào", "as long as / provided that", "asalkan"],
    ["我们", "wǒ men", "we", "kita"],
    ["有", "yǒu", "have / possess", "mempunyai"],
    ["根", "gēn", "roots (foundation / faith)", "akar umbi (pegangan hidup)"],
    ["<br>", "", "", ""],
    ["纵然", "zòng rán", "even if / even though", "biarpun / sekalipun"],
    ["没有", "méi yǒu", "there is not", "tiada"],
    ["一片", "yí piàn", "a single", "sehelai pun"],
    ["叶子", "yè zi", "leaf", "daun"],
    ["遮身", "zhē shēn", "to cover or shelter the body", "untuk melindungi tubuh"],
    ["<br>", "", "", ""],
    ["仍旧", "réng jiù", "still / yet", "masih tetap"],
    ["是", "shì", "are / remain", "merupakan"],
    ["一株", "yì zhū", "a", "sepohon"],
    ["挺然", "tǐng rán", "standing tall and upright", "yang berdiri tegak megah"],
    ["的", "de", "(particle)", "punya"],
    ["树", "shù", "tree", "pokok"],

    ["\n", "", "", ""], // 👈 第2节（第4–6行：纵然遍体鳞伤，依然撑起脊梁）

    ["只要", "zhǐ yào", "as long as", "asalkan"],
    ["我们", "wǒ men", "we", "kita"],
    ["有根", "yǒu gēn", "have roots", "mempunyai akar"],
    ["<br>", "", "", ""],
    ["纵然", "zòng rán", "even if", "biarpun"],
    ["伤痕累累", "shāng hén lěi lěi", "covered all over with scars and wounds", "dipenuhi parut luka yang banyak"],
    ["<br>", "", "", ""],
    ["仍旧", "réng jiù", "still", "masih tetap"],
    ["在地上", "zài dì shàng", "upon the ground / earth", "di atas bumi"],
    ["把", "bǎ", "holding", "menegakkan"],
    ["直直的", "zhí zhí de", "straight and unbent", "yang lurus tegak"],
    ["躯干", "qū gàn", "trunk / torso", "batang tubuh"],
    ["撑起", "chēng qǐ", "propping up / holding high", "menyokong bangun"],

    ["\n", "", "", ""], // 👈 第3节（第7–10行：纵然饱受风霜，泥土深处静静蓄力）

    ["只要", "zhǐ yào", "as long as", "asalkan"],
    ["我们", "wǒ men", "we", "kita"],
    ["有根", "yǒu gēn", "have roots", "mempunyai akar"],
    ["<br>", "", "", ""],
    ["纵然", "zòng rán", "even if", "biarpun"],
    ["饱受", "bǎo shòu", "having fully suffered / endured", "menderita teruk akibat"],
    ["风霜", "fēng shuāng", "wind and frost (hardships and trials)", "angin dan embun beku (cabaran hidup)"],
    ["<br>", "", "", ""],
    ["仍旧", "réng jiù", "still", "masih tetap"],
    ["在", "zài", "in", "di dalam"],
    ["泥土", "ní tǔ", "the soil / earth", "tanah"],
    ["深处", "shēn chù", "deep down", "yang jauh di dasar"],
    ["<br>", "", "", ""],
    ["静静地", "jìng jìng de", "quietly and silently", "dengan tenang dan senyap"],
    ["积蓄", "jī xù", "accumulating / storing up", "mengumpulkan dan menyimpan"],
    ["力量", "lì liàng", "strength and power", "kekuatan tenaga"],

    ["\n", "", "", ""], // 👈 第4节（第11–16行：根在希望就在，终将绽出新绿与繁花）

    ["任", "rèn", "no matter how / regardless of", "biarpun"],
    ["春去秋来", "chūn qù qiū lái", "spring goes and autumn comes (time passes)", "musim bunga berlalu dan musim luruh tiba"],
    ["<br>", "", "", ""],
    ["任", "rèn", "no matter how", "biarpun"],
    ["霜雪", "shuāng xuě", "frost and snow", "embun beku dan salji"],
    ["覆盖", "fù gài", "cover / blanket over", "menyelimuti"],
    ["<br>", "", "", ""],
    ["根在", "gēn zài", "as long as the roots remain", "selagi akar masih ada"],
    ["，", "", "", ""],
    ["希望", "xī wàng", "hope", "harapan"],
    ["就在", "jiù zài", "is right there / remains alive", "tetap ada bersama"],
    ["<br>", "", "", ""],
    ["终有", "zhōng yǒu", "there will eventually be", "pastinya akan tiba"],
    ["一天", "yì tiān", "one day", "suatu hari nanti"],
    ["<br>", "", "", ""],
    ["枝头上", "zhī tóu shàng", "on the tips of the branches", "di hujung dahan"],
    ["会", "huì", "will", "akan"],
    ["再", "zài", "once again", "semula"],
    ["绽出", "zhàn chū", "burst forth / sprout", "memekarkan"],
    ["新绿", "xīn lǜ", "fresh green buds", "pucuk hijau yang baharu"],
    ["<br>", "", "", ""],
    ["开出", "kāi chū", "and blossom into", "serta mengembangkan"],
    ["生命", "shēng mìng", "life's", "kehidupan punya"],
    ["最", "zuì", "the most", "yang paling"],
    ["灿烂", "càn làn", "brilliant, splendid, and radiant", "gemilang dan indah berseri"],
    ["的", "de", "(particle)", "punya"],
    ["花朵", "huā duǒ", "flowers / blossoms", "bunga-bungaan"],

    ["\n", "", "", ""], // 👈 出处（自动右对齐落款）

    ["（", "", "", ""],
    ["蓉子", "róng zǐ", "Rong Zi (Taiwanese poet Wang Rongzhi, 1928–2021)", "Rong Zi", "", "u"],
    ["《", "", "", ""],
    ["只要我们有根", "zhǐ yào wǒ men yǒu gēn", "As Long As We Have Roots", "Asalkan Kita Mempunyai Akar"],
    ["》）", "", "", ""]
];
