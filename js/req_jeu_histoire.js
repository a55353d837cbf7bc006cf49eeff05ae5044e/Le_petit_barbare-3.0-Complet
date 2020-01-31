// Jeu mode histoire

"use strict";

const fs = require("fs");
require('remedial');

const map = require("./map.js");
const life_perso = require('./attaque_ennemi.js');

const req_jeu_histoire = function (req, res, query, bfld, heros, oppo, wave, niveau, nom){
	
	let marqueurs;
	let page;
	let tmp = {"x" : 3, "y" : 2, "life" : 100, "scry" : 1, "epee" : 0, "hache" : 0, "dague" : 0, "masse" : 0, "potion" : 0, "epee_1": 0, "epee_2": 0, "arc" : 0, "pieces" : 0};
	if(niveau[0] === 1){
		heros.splice(0, 1);
		heros.push(tmp);
	}else{
		heros[0].x = 3;
		heros[0].y = 2;
	}	

	if(niveau[0] === 3 ||niveau[0] === 9 || niveau[0] === 13 || niveau[0] === 19){
		for(let i = 0; i < bfld[1].length; i++){
			bfld[1][i] = "1";
		}
	}else if(niveau[0] === 4 || niveau[0] === 5){
		for(let i = 0; i < bfld[1].length; i++){
            bfld[1][i] = "1";
        }
		for(let j = 0; j < bfld.length; j++){
			bfld[j][13] = "1";
		}
	}else if(niveau[0] === 32){
		for(let i = 0; i < bfld[1].length; i++){
            bfld[0][i] = "1";
            bfld[6][i] = "1";
            bfld[1][i] = " ";
            bfld[2][i] = " ";
            bfld[3][i] = " ";
            bfld[4][i] = " ";
            bfld[5][i] = " ";
        }
		bfld[1][0] = "1";
        bfld[1][1] = "1";
        bfld[1][2] = "1";
        bfld[1][14] = "1";

        bfld[2][0] = "1";
        bfld[2][1] = "1";
        bfld[2][2] = "1";
        bfld[2][14] = "1";

        bfld[3][0] = "1";
        bfld[3][1] = "1";
        bfld[3][2] = "1";
        bfld[3][14] = "1";

        bfld[4][0] = "1";
        bfld[4][1] = "1";
        bfld[4][2] = "1";
        bfld[4][14] = "1";

        bfld[5][0] = "1";
        bfld[5][1] = "1";
        bfld[5][2] = "1";
		
		for(let i = 0; i < bfld[1].length; i++){
            bfld[1][i] = "1";
        }

	}else if(niveau[0] === 6){
		 for(let i = 0; i < bfld[1].length; i++){
            bfld[5][i] = "1";
        	bfld[4][i] = "1";
		}
	}else if(niveau[0] === 31){
		for(let j = 0; j < bfld.length; j++){
            bfld[j][13] = "1";
			bfld[j][12] = "1";
			bfld[j][11] = "1";
        }
	}else if(niveau[0] === 16){
		for(let j = 0; j < bfld.length; j++){
            bfld[j][13] = "1";
            bfld[j][12] = "1";
        }
		for(let i = 0; i < bfld[1].length; i++){
            bfld[5][i] = "1";
        }
		bfld[0][2] = "1";
		bfld[1][2] = "1";
		bfld[4][2] = "1";
		bfld[5][2] = "1";
		bfld[6][2] = "1";
	}else if(niveau[0] === 28){
		for(let j = 0; j < bfld.length; j++){
            bfld[j][2] = "1";
            bfld[j][3] = "1";
        }
	}else if(niveau[0] === 29){
		for(let i = 0; i < bfld[1].length; i++){
            bfld[0][i] = "1";
            bfld[6][i] = "1";
            bfld[1][i] = " ";
            bfld[2][i] = " ";
            bfld[3][i] = " ";
            bfld[4][i] = " ";
            bfld[5][i] = " ";
        }

		bfld[1][0] = "1";
        bfld[1][1] = "1";
        bfld[1][2] = "1";
        bfld[1][14] = "1";

        bfld[2][0] = "1";
        bfld[2][1] = "1";
        bfld[2][2] = "1";
        bfld[2][14] = "1";

        bfld[3][0] = "1";
        bfld[3][1] = "1";
        bfld[3][2] = "1";
        bfld[3][14] = "1";

        bfld[4][0] = "1";
        bfld[4][1] = "1";
        bfld[4][2] = "1";
        bfld[4][14] = "1";

        bfld[5][0] = "1";
        bfld[5][1] = "1";
        bfld[5][2] = "1";
        bfld[5][14] = "1";

		
		for(let i = 0; i < bfld[1].length; i++){
            bfld[1][i] = "1";
        }
		bfld[5][13] = "1";
        bfld[5][12] = "1";
        bfld[5][11] = "1";
        bfld[5][10] = "1";
        bfld[5][9] = "1";
		bfld[5][8] = "1";
	}else{
		for(let i = 0; i < bfld[1].length; i++){
            bfld[0][i] = "1";
			bfld[6][i] = "1";
			bfld[1][i] = " ";
			bfld[2][i] = " ";
			bfld[3][i] = " ";
			bfld[4][i] = " ";
			bfld[5][i] = " ";
        }
		bfld[1][0] = "1";
		bfld[1][1] = "1";
		bfld[1][2] = "1";
		bfld[1][14] = "1";

		bfld[2][0] = "1";
        bfld[2][1] = "1";
        bfld[2][2] = "1";
        bfld[2][14] = "1";

		bfld[3][0] = "1";
        bfld[3][1] = "1";
        bfld[3][2] = "1";
        bfld[3][14] = "1";

		bfld[4][0] = "1";
        bfld[4][1] = "1";
        bfld[4][2] = "1";
        bfld[4][14] = "1";
		
		bfld[5][0] = "1";
        bfld[5][1] = "1";
        bfld[5][2] = "1";
        bfld[5][14] = "1";
	}
	
	
	for(let i = 1; i < bfld.length - 1; i ++){
		for(let j = 1; j< bfld[0].length - 1; j++){
			if(bfld[i][j] === "x"){
				bfld[i][j] = " ";
			}else if(bfld[i][j] === "o"){
				bfld[i][j] = " ";
			}
		}
	}

	if(niveau[0] === 28){
		bfld[1][3] = "x";
		heros[0].x = 1;
        heros[0].y = 3;
	}else{
		bfld[3][2] = "x";
	}
	
	wave[0] = 0;
	for(let k = 0; k < oppo.length; k++){
		oppo.splice(k, 1);
		k = k - 1;
	}
		
	console.log(bfld);
	console.log(niveau);
	
	let n = niveau[0];
	page = fs.readFileSync("./html/map" + n +".html", "utf-8");
	marqueurs = {};

	if(typeof oppo[0] !== "undefined"){
		marqueurs.life_enemy1 = oppo[0].life + "%";
	} else {
		marqueurs.life_enemy1 = "";
	}

	marqueurs.masse = "x" + heros[0].masse;
	marqueurs.money = heros[0].pieces + "$";
	marqueurs.dague = "x" + heros[0].dague;
	marqueurs.epee = "x" + heros[0].epee;
	marqueurs.hache = "x" + heros[0].hache;
	marqueurs.belle_epee = "x" + heros[0].epee_1;
	marqueurs.epee_casse = "x" +  heros[0].epee_2;
	marqueurs.arc = "x" + heros[0].arc;
	marqueurs.potion = "x" + heros[0].potion;
	marqueurs.land = map(bfld, query, oppo, heros);
	marqueurs.life = heros[0].life + "%";
    marqueurs.nom = nom[0];
    marqueurs.level = niveau[0];


	res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(page.supplant(marqueurs));
    res.end();
};

module.exports = req_jeu_histoire;
