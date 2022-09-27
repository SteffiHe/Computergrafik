/**
 * 3D Data Store for a model.
 * Missing properties/arrays (commented out)
 * are mixed in from data module.
 *  
 * @namespace cog1.data
 * @module cube
 */
define(["exports", "data"], function(exports, data) {
	"use strict";

	/**
	 * Create an instance of the model defined in this module.
	 * 
	 * @parameter object with fields:
	 * @returns instance of this model.
	 */
	exports.create = function(parameter) {
		
		if(parameter) {
			var scale = parameter.scale;
			var textureURL = parameter.textureURL;
			// Each face shows a different area of the given texture (e.g, a dice).
			var sixFacesTexture = parameter.sixFacesTexture;
		}
		// Set default values if parameter is undefined.
		if(scale == undefined){
			scale = 200;
		}
		if(textureURL == undefined){
			textureURL = "";
		}
		if(sixFacesTexture == undefined){
			sixFacesTexture = false;
		}

		// Instance of the model to be returned.
		var instance = {};
	  // 1st. Quadrant (x,y,z)
	  const a1 = [1.5, 7.24, 0];
	  const b1 = [1.5, 8.74, 0];
	  const c1 = [2.56, 9.8, 0];
	  const d1 = [4.06, 9.8, 0];
	  const e1 = [5.12, 8.74, 0];
	  const f1 = [5.12, 7.24, 0];
	  const g1 = [4.06, 6.18, 0];
	  const h1 = [6.18, 4.06, 0];
	  const i1 = [7.24, 5.12, 0];
	  const j1 = [8.74, 5.12, 0];
	  const k1 = [9.8, 4.06, 0];
	  const l1 = [9.8, 2.56, 0];
	  const m1 = [8.74, 1.5, 0];
	  const n1 = [7.24, 1.5, 0];
	  //Inner wall
	  const o1 = [0, 5.74, 0];
	  const p1 = [1.5, 5.74, 0];
	  const q1 = [3.31, 4.88, 0];
	  const r1 = [4.88, 3.31, 0];
	  const s1 = [5.74, 1.5, 0];
	  //const t1 = [5.74, 0, 0]; <-- Not needed
	  const u1 = [2.56, 6.18, 0]; //Tower inner 1
	  const v1 = [6.18, 2.56, 0]; //Tower inner 2

		// Vertex indices:							
		//   7----6
		//	/|   /|
		// 4----5 |
		// | 3--|-2
		// |/   |/
		// 0----1
		instance.vertices = [
			// bottom (y=-1)
			[-1,-1, 1],
			[ 1,-1, 1],
			[ 1,-1,-1],
			[-1,-1,-1],
			// top (y=+1)		
			[-1,1, 1],
			[ 1,1, 1],
			[ 1,1,-1],
			[-1,1,-1],
		];
		// Use default colors, implicitly.
		// instance.colors = data.colors;

		// Corners of the faces have to fit the texture coordinates.			
		// Faces: bottom/down, top/up, front, right, back, left. 
		instance.polygonVertices = [
			[3,2,1,0],
			[4,5,6,7],
			[4,0,1,5],
			[1,2,6,5],
			[6,2,3,7],
			[3,0,4,7]
		];	

		instance.polygonColors = [0,1,2,3,4,5];
		
		//instance.vertexNormals = [];
		//instance.polygonNormals = [];

		if( ! sixFacesTexture){
	        // Use default texture coordinates.
			// instance.textureCoord = [];	
			// For order of corners of faces, see polygonVertices.
			instance.polygonTextureCoord = [
				[1,2,3,0],
				[1,2,3,0],
				[1,0,3,2],
				[3,0,1,2],
				[3,0,1,2],
				[3,0,1,2]
			];
		} else {
			// BEGIN exercise Cube-Dice-Texture
			
			// Order 0 to 16 form bottom-left to top-right
			// line by line, indices in spatial order:
			instance.textureCoord = [];
			// ...

			// Use textureCoord in order given for textureCoord.
			// The order of corners of faces must fit the one given in polygonVertices.
			// Match orientation of face given for polygonVertices.
			// D=bottom/down, U=top/up, F=front, R=right, B=back, L=left
			// The mapping is explained on the texture image.
			// instance.polygonTextureCoord = [ ....];

			// END exercise Cube-Dice-Texture			
		}
		
		instance.textureURL = textureURL;

		data.applyScale.call(instance, scale);

		return instance;		
	};
});