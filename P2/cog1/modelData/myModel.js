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
		//Säule
		const sUnten1 = newVertex(-1, -5, 1);
		const sUnten2 = newVertex(1, -5, 1);
		const sUnten3 = newVertex(1, -5, -1);
		const sUnten4 = newVertex(-1, -5, -1);
		const sUnten5 = newVertex(-1.4, -5, 0);
		const sUnten6 = newVertex(0, -5, 1.4);
		const sUnten7 = newVertex(1.4, -5, 0);
		const sUnten8 = newVertex(0, -5, -1.4);

		const sOben1 = newVertex(-1, 5, 1);
		const sOben2 = newVertex(1, 5, 1);
		const sOben3 = newVertex(1, 5, -1);
		const sOben4 = newVertex(-1, 5, -1);
		const sOben5 = newVertex(-1.4, 5, 0);
		const sOben6 = newVertex(0, 5, 1.4);
		const sOben7 = newVertex(1.4, 5, 0);
		const sOben8 = newVertex(0, 5, -1.4);

		//oberer Bereich
		const aOben1 = newVertex(-1.4, 5.8, 1.5);
		const aOben2 = newVertex(0, 5.8, 2);
		const aOben3 = newVertex(1.4, 5.8, 1.5);
		const aOben4 = newVertex(2, 5.8, -0.1);
		const aOben5 = newVertex(1.4, 5.8, -1.5);
		const aOben6 = newVertex(0, 5.8, -2);
		const aOben7 = newVertex(-1.4, 5.8, -1.5);
		const aOben8 = newVertex(-2, 5.8, 0.1);
		const aOben9 = newVertex(-1.4, 5.8, 1.5);
		//const aOben10 wird nicht benötigt
		const aOben11 = newVertex(-1.8, 6, 2);
		const aOben12 = newVertex(0, 6, 2.6);
		const aOben13 = newVertex(1.8, 6, 2);
		const aOben14 = newVertex(2.6, 6, -0.1);
		const aOben15 = newVertex(1.8, 6, -2);
		const aOben16 = newVertex(0, 6, -2.6);
		const aOben17 = newVertex(-1.8, 6, -2);
		const aOben18 = newVertex(-2.6, 6, 0.1);
		const aOben19 = newVertex(-1.8, 6, 2);
		//const aOben20 wird nicht benötigt
		const aOben21 = newVertex(-2.1, 7, 2.3);
		const aOben22 = newVertex(0, 7, 3);
		const aOben23 = newVertex(2.1, 7, 2.3);
		const aOben24 = newVertex(3, 7, -0.1);
		const aOben25 = newVertex(2.1, 7, -2.3);
		const aOben26 = newVertex(0, 7, -3);
		const aOben27 = newVertex(-2.1, 7, -2.3);
		const aOben28 = newVertex(-3, 7, 0.1);
		const aOben29 = newVertex(-2.1, 7, 2.3);
		//const aOben30 wird nicht benötigt
		const aOben31 = newVertex(-1.8, 8, 2);
		const aOben32 = newVertex(0, 8, 2.6);
		const aOben33 = newVertex(1.8, 8, 2);


		instance.polygonVertices = [
			[sUnten1, sOben1, sOben6, sUnten6],
			[sUnten2, sOben2, sOben7, sUnten7],
			[sUnten3, sOben3, sOben8, sUnten8],
			[sUnten4, sOben4, sOben5, sUnten5],
			[sUnten5, sOben5, sOben1, sUnten1],
			[sUnten6, sOben6, sOben2, sUnten2],
			[sUnten7, sOben7, sOben3, sUnten3],
			[sUnten8, sOben8, sOben4, sUnten4],

			[sOben1, aOben1, aOben2, sOben6],
			[sOben2, aOben3, aOben2, sOben6],
			[sOben7, aOben4, aOben3, sOben2],
			[sOben3, aOben5, aOben4, sOben7],
			[sOben8, aOben6, aOben5, sOben3],
			[sOben4, aOben7, aOben6, sOben8],
			[sOben5, aOben8, aOben7, sOben4],			
			[sOben1, aOben9, aOben8, sOben5],
		
			[aOben1, aOben11, aOben12, aOben2],
			[aOben2, aOben12, aOben13, aOben3],
			[aOben3, aOben13, aOben14, aOben4],
			[aOben4, aOben14, aOben15, aOben5],
			[aOben5, aOben15, aOben16, aOben6],
			[aOben6, aOben16, aOben17, aOben7],
			[aOben7, aOben17, aOben18, aOben8],
			[aOben8, aOben18, aOben19, aOben9],

			[aOben11, aOben21, aOben22, aOben12],
			[aOben12, aOben22, aOben23, aOben13],
			[aOben13, aOben23, aOben24, aOben14],
			[aOben14, aOben24, aOben25, aOben15],
			[aOben15, aOben25, aOben26, aOben16],
			[aOben16, aOben26, aOben27, aOben17],
			[aOben17, aOben27, aOben28, aOben18],
			[aOben18, aOben28, aOben29, aOben19],

			[aOben21, aOben31, aOben32, aOben22],
			[aOben22, aOben32, aOben33, aOben23],

		];
		
		instance.polygonColors = [];
		for(var i = 0; i < 44; i++) {
			instance.polygonColors[i] = 6;
		}

		for(var i = 44; i < 118; i++) {
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