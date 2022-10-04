/**
 * Empty object for groups in scenegraph.
 * 
 * @namespace cog1.data
 * @module myModel
 */
 define(["exports", "data"], function(exports, data) {
	"use strict";

	let index = 0;
	let instance = {};
	/**
	 * Create an instance of the model defined in this module.
	 * 
	 * @parameter object with fields:
	 * @returns instance of this model.
	 */
	exports.create = function(parameter) {
		
		// Instance of the model to be returned.
		
		var scale = parameter.scale ? parameter.scale : 100;
		
		instance.vertices = [];
		//mittlerer Bereich des Ankers
		const mitteU1 = newVertex(-1, -5, 1);
		const mitteU2 = newVertex(0, -4.8, 1.4);
		const mitteU3 = newVertex(1, -4.8, 1);
		const mitteU4 = newVertex(1.4, -5, 0);
		const mitteU5 = newVertex(1, -5, -1);
		const mitteU6 = newVertex(0, -4.8, -1.4);
		const mitteU7 = newVertex(-1, -4.8, -1);
		const mitteU8 = newVertex(-1.4, -5, 0);

		const mitteO1 = newVertex(-1, 5, 1);
		const mitteO2 = newVertex(0, 5, 1.4);
		const mitteO3 = newVertex(1, 5, 1);
		const mitteO4 = newVertex(1.4, 5, 0);
		const mitteO5 = newVertex(1, 5, -1);
		const mitteO6 = newVertex(0, 5, -1.4);
		const mitteO7 = newVertex(-1, 5, -1);
		const mitteO8 = newVertex(-1.4, 5, 0);


		//oberer Bereich des Ankers
		const oben1 = newVertex(-1.4, 5.8, 1.5);
		const oben2 = newVertex(0, 5.8, 2);
		const oben3 = newVertex(1.4, 5.8, 1.5);
		const oben4 = newVertex(2, 5.8, -0.1);
		const oben5 = newVertex(1.4, 5.8, -1.5);
		const oben6 = newVertex(0, 5.8, -2);
		const oben7 = newVertex(-1.4, 5.8, -1.5);
		const oben8 = newVertex(-2, 5.8, 0.1);
		//const oben9 wird nicht benötigt
		//const oben10 wird nicht benötigt
		const oben11 = newVertex(-1.8, 6, 2);
		const oben12 = newVertex(0, 6, 2.6);
		const oben13 = newVertex(1.8, 6, 2);
		const oben14 = newVertex(2.6, 6, -0.1);
		const oben15 = newVertex(1.8, 6, -2);
		const oben16 = newVertex(0, 6, -2.6);
		const oben17 = newVertex(-1.8, 6, -2);
		const oben18 = newVertex(-2.6, 6, 0.1);
		//const oben19 wird nicht benötigt
		//const oben20 wird nicht benötigt
		const oben21 = newVertex(-2.1, 7, 2.3);
		const oben22 = newVertex(0, 7, 3);
		const oben23 = newVertex(2.1, 7, 2.3);
		const oben24 = newVertex(3, 7, -0.1);
		const oben25 = newVertex(2.1, 7, -2.3);
		const oben26 = newVertex(0, 7, -3);
		const oben27 = newVertex(-2.1, 7, -2.3);
		const oben28 = newVertex(-3, 7, 0.1);
		//const oben29 wird nicht benötigt
		//const oben30 wird nicht benötigt
		const oben31 = newVertex(-1.8, 8, 2);
		const oben32 = newVertex(0, 8, 2.6);
		const oben33 = newVertex(1.8, 8, 2);
		const oben34 = newVertex(2.6, 8, -0.1);
		const oben35 = newVertex(1.8, 8, -2);
		const oben36 = newVertex(0, 8, -2.6);
		const oben37 = newVertex(-1.8, 8, -2);
		const oben38 = newVertex(-2.6, 8, 0.1);
		//const oben39 wird nicht benötigt 
		//const oben40 wird nicht benötigt
		const oben41 = newVertex(-1.4, 8.2, 1.5);
		const oben42 = newVertex(0, 8.2, 2);
		const oben43 = newVertex(1.4, 8.2, 1.5);
		const oben44 = newVertex(2, 8.2, -0.1);
		const oben45 = newVertex(1.4, 8.2, -1.5);
		const oben46 = newVertex(0, 8.2, -2);
		const oben47 = newVertex(-1.4, 8.2, -1.5);
		const oben48 = newVertex(-2, 8.2, 0.1);
		//const oben49 wird nicht benötigt 
		//const oben50 wird nicht benötigt
		const oben51 = newVertex(-1, 9, 1);
		const oben52 = newVertex(0, 9, 1.4);
		const oben53 = newVertex(1, 9, 1);
		const oben54 = newVertex(1.4, 9, 0);
		const oben55 = newVertex(1, 9, -1);
		const oben56 = newVertex(0, 9, -1.4);
		const oben57 = newVertex(-1, 9, -1);
		const oben58 = newVertex(-1.4, 9, 0);
		//const oben59 wird nicht benötigt
		//const oben60 wird nicht benötigt
		const oben61 = newVertex(-0.5, 11, 0.4);
		const oben62 = newVertex(0, 11, 0.6);
		const oben63 = newVertex(0.5, 11, 0.4);
		const oben64 = newVertex(0.6, 11, 0);
		const oben65 = newVertex(0.5, 11, -0.4);
		const oben66 = newVertex(0, 11, -0.6);
		const oben67 = newVertex(-0.5, 11, -0.4);
		const oben68 = newVertex(-0.6, 11, 0);

		//Unterer Bereich des Ankers
		const unten1 = newVertex(-1, -7, 1);
		const unten2 = newVertex(0, -6.8, 1.4);
		const unten3 = newVertex(1, -6.8, 1);
		const unten4 = newVertex(1.4, -7, 0);
		const unten5 = newVertex(1, -7, -1);
		const unten6 = newVertex(0, -6.8, -1.4);
		const unten7 = newVertex(-1, -6.8, -1);
		const unten8 = newVertex(-1.4, -7, 0);
	
		//rechte Seite
		const untenR1 = newVertex(0.7, -4, 5);
		const untenR2 = newVertex(3, -4, 4);
		const untenR3 = newVertex(0.7, -6, 5);
		const untenR4 = newVertex(3, -6, 4);

		const untenR5 = newVertex(2, -3, 7);
		const untenR6 = newVertex(3.6, -3, 6.3);
		const untenR7 = newVertex(2.5, -4, 7.8);
		const untenR8 = newVertex(3.8, -4, 7.2);

		//rechte Ankerspitze
		const spitzeR1 = newVertex(1.8, -2.5, 6.7);
		const spitzeR2 = newVertex(3.5, -2.5, 5.9);
		const spitzeR3 = newVertex(2.7, -4.5, 8.1);
		const spitzeR4 = newVertex(3.9, -4.5, 7.6);
		const spitzeR5 = newVertex(4, -2.7, 7.8);
		const spitzeR6 = newVertex(2.8, -2.7, 8.3);


		//linke Seite
		const untenL1 = newVertex(-0.7, -4, -5);
		const untenL2 = newVertex(-3, -4, -4);
		const untenL3 = newVertex(-0.7, -6, -5);
		const untenL4 = newVertex(-3, -6, -4);

		const untenL5 = newVertex(-2, -3, -7);
		const untenL6 = newVertex(-3.6, -3, -6.3);
		const untenL7 = newVertex(-2.5, -4, -7.8);
		const untenL8 = newVertex(-3.8, -4, -7.2);

		//linke Ankerspitze
		const spitzeL1 = newVertex(-1.8, -2.5, -6.7);
		const spitzeL2 = newVertex(-3.5, -2.5, -5.9);
		const spitzeL3 = newVertex(-2.7, -4.5, -8.1);
		const spitzeL4 = newVertex(-3.9, -4.5, -7.6);
		const spitzeL5 = newVertex(-4, -2.7, -7.8);
		const spitzeL6 = newVertex(-2.8, -2.7, -8.3);


		instance.polygonVertices = [
			//Mitte
			[mitteU1, mitteO1, mitteO2, mitteU2],
			[mitteU2, mitteO2, mitteO3, mitteU3],
			[mitteU3, mitteO3, mitteO4, mitteU4],
			[mitteU4, mitteO4, mitteO5, mitteU5],
			[mitteU5, mitteO5, mitteO6, mitteU6],
			[mitteU6, mitteO6, mitteO7, mitteU7],
			[mitteU7, mitteO7, mitteO8, mitteU8],
			[mitteU8, mitteO8, mitteO1, mitteU1],
	

			//Oben
			[mitteO1, oben1, oben2, mitteO2],
			[mitteO2, oben2, oben3, mitteO3],
			[mitteO3, oben3, oben4, mitteO4],
			[mitteO4, oben4, oben5, mitteO5],
			[mitteO5, oben5, oben6, mitteO6],
			[mitteO6, oben6, oben7, mitteO7],
			[mitteO7, oben7, oben8, mitteO8],			
			[mitteO8, oben8, oben1, mitteO1],
		
			[oben1, oben11, oben12, oben2],
			[oben2, oben12, oben13, oben3],
			[oben3, oben13, oben14, oben4],
			[oben4, oben14, oben15, oben5],
			[oben5, oben15, oben16, oben6],
			[oben6, oben16, oben17, oben7],
			[oben7, oben17, oben18, oben8],
			[oben8, oben18, oben11, oben1],

			[oben11, oben21, oben22, oben12],
			[oben12, oben22, oben23, oben13],
			[oben13, oben23, oben24, oben14],
			[oben14, oben24, oben25, oben15],
			[oben15, oben25, oben26, oben16],
			[oben16, oben26, oben27, oben17],
			[oben17, oben27, oben28, oben18],
			[oben18, oben28, oben21, oben11],

			[oben21, oben31, oben32, oben22],
			[oben22, oben32, oben33, oben23],
			[oben23, oben33, oben34, oben24],
			[oben24, oben34, oben35, oben25],
			[oben25, oben35, oben36, oben26],
			[oben26, oben36, oben37, oben27],
			[oben27, oben37, oben38, oben28],
			[oben28, oben38, oben31, oben21],

			[oben31, oben41, oben42, oben32],
			[oben32, oben42, oben43, oben33],
			[oben33, oben43, oben44, oben34],
			[oben34, oben44, oben45, oben35],
			[oben35, oben45, oben46, oben36],
			[oben36, oben46, oben47, oben37],
			[oben37, oben47, oben48, oben38],
			[oben38, oben48, oben41, oben31],

			[oben41, oben51, oben52, oben42],
			[oben42, oben52, oben53, oben43],
			[oben43, oben53, oben54, oben44],
			[oben44, oben54, oben55, oben45],
			[oben45, oben55, oben56, oben46],
			[oben46, oben56, oben57, oben47],
			[oben47, oben57, oben58, oben48],
			[oben48, oben58, oben51, oben41],

			[oben51, oben61, oben62, oben52],
			[oben52, oben62, oben63, oben53],
			[oben53, oben63, oben64, oben54],
			[oben54, oben64, oben65, oben55],
			[oben55, oben65, oben66, oben56],
			[oben56, oben66, oben67, oben57],
			[oben57, oben67, oben68, oben58],
			[oben58, oben68, oben61, oben51],

			//unten
			[mitteU1, unten1, unten2, mitteU2],
			[mitteU2, unten2, unten3, mitteU3],
			[mitteU3, unten3, unten4, mitteU4],
			[mitteU4, unten4, unten5, mitteU5],
			[mitteU5, unten5, unten6, mitteU6],
			[mitteU6, unten6, unten7, mitteU7],
			[mitteU7, unten7, unten8, mitteU8],
			[mitteU8, unten8, unten1, mitteU1],

			//unten rechte Seite
			[mitteU1, untenR1, untenR2, mitteU4],
			[unten1, untenR3, untenR4, unten4],
			[mitteU1, unten1, untenR3, untenR1],
			[mitteU4, unten4, untenR4, untenR2],

			[untenR1, untenR5, untenR6, untenR2],
			[untenR3, untenR7, untenR8, untenR4],
			[untenR1, untenR5, untenR7, untenR3],
			[untenR2, untenR6, untenR8, untenR4],

			//rechte Ankerspitze
			[untenR5, spitzeR1, spitzeR2, untenR6],
			[untenR5, spitzeR3, spitzeR4, untenR6],
			[spitzeR1, spitzeR2, spitzeR5, spitzeR6],
			[spitzeR3, spitzeR4, spitzeR5, spitzeR6],
			[spitzeR1, spitzeR3, spitzeR6],
			[spitzeR2, spitzeR4, spitzeR5],

			//unten linke Seite
			[mitteU5, untenL1, untenL2, mitteU8],
			[unten5, untenL3, untenL4, unten8],
			[mitteU5, unten5, untenL3, untenL1],
			[mitteU8, unten8, untenL4, untenL2],

			[untenL1, untenL5, untenL6, untenL2],
			[untenL3, untenL7, untenL8, untenL4],
			[untenL1, untenL5, untenL7, untenL3],
			[untenL2, untenL6, untenL8, untenL4],

			//linke Ankerspitze
			[untenL5, spitzeL1, spitzeL2, untenL6],
			[untenL5, spitzeL3, spitzeL4, untenL6],
			[spitzeL1, spitzeL2, spitzeL5, spitzeL6],
			[spitzeL3, spitzeL4, spitzeL5, spitzeL6],
			[spitzeL1, spitzeL3, spitzeL6],
			[spitzeL2, spitzeL4, spitzeL5],

		];
		
		instance.polygonColors = [];
		for(var i = 0; i < 100; i++) {
			instance.polygonColors[i] = 6;
		}

		for(var i = 100; i < 118; i++) {
			instance.polygonColors[i] = 7;
		}

		for(var i = 118; i < 126; i++) {
			instance.polygonColors[i] = 9;
		}

		data.applyScale.call(instance, scale);
		
		return instance;		
	};

	function newVertex(x, y, z) {
		const vertex = {index: index++, coord: [x,y,z]};
		instance.vertices.push(vertex.coord);
		return vertex.index;
	}
});