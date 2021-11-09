const path= require('path');
const HTMLWebpackPlugin= require("html-webpack-plugin");
const {CleanWebpackPlugin}= require('clean-webpack-plugin');
const MiniCssExtractPlugin= require("mini-css-extract-plugin");
const CopyWebpackPlugin= require("copy-webpack-plugin");

module.exports= {
	 mode: "development",
	entry: {                       
		main: "./src/index.js"
	},  
	output:{                                 
		filename: "index.js",
		path: path.resolve(__dirname,"dist")    
	},
	plugins: [
	    new HTMLWebpackPlugin({
	    	template: './src/index.html'
	    }),
	    new CleanWebpackPlugin(),
	    new MiniCssExtractPlugin({
    	filename: "style.css"
        }),
        new CopyWebpackPlugin({
        	patterns: [
		        {
	                 from: path.resolve(__dirname,"./src/assets"),
	                 to: path.resolve(__dirname, "dist/assets")
		        }
	    ],
	}),
	],
	module: {
  	    rules: [
		  	{
		        test: /\.css$/,
		        use:[
	          		{
	          			loader: MiniCssExtractPlugin.loader,
	          			options: {}
	         		},
	         		"css-loader"
	         		]
		    },
		    {
  	  	        test:/\.(jpg|svg|ttf)$/,
  	  	        type: 'asset/resource',
  	  	        generator: {
         			filename: '[name][ext]'
       			}
  	        }
	    ]
	}    
}