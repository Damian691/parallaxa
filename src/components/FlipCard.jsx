/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function FlipCard({
	title = "Card Title",
	body = "Card Body",
	backTitle = "Back Title",
	backBody = "Back Body",
	transition = 0.5,
	direction="Y",
	bgColor="black",
	zIndex = 0,
	height = 400,
	width = 400,
	frontQuote = false,
	backQuote = false,
	blur=0,
}
) {	

	const [flipped, setFlipped] = useState(false);
	
	function flipOver(){
		setFlipped(!flipped);
	}

	function showFront(){
		setFlipped(true)
	}

	function showBack(){
		setFlipped(false)
	}

	function calcDegrees(flipped){
		return flipped ? 0 : 180;
	}

	return (
	<div style={{position:"relative", width: width, height: height, display: "flex", margin: "2rem", color:"white"}}
		onMouseEnter={() => showFront()}
		onMouseLeave={() => showBack()}
	>
	  <Card 
		className="flex-center"
		style={{
			width:"100%", height:"100%", zIndex:zIndex,
			transition: transition + "s",
			backfaceVisibility: "hidden",
			position: "absolute",
			backgroundColor: bgColor,
			padding: "2rem",
			transform: `rotate${direction}(${calcDegrees(flipped)}deg)`,
			overflow:"hidden",
			backdropFilter:`blur(${blur})`
		}}
	  >
		{!backQuote && ( <>
			<Card.Title>{backTitle}</Card.Title>
			{backBody}
			</>
		)}
		{backQuote && (
			<blockquote className="blockquote" style={{fontSize: "1rem"}}>
				<p>&ldquo;{backBody}&rdquo;</p>
				<footer className="blockquote-footer text-center mt-1">{backTitle}</footer>
			</blockquote>
		)}
	  </Card>

	  <Card 
		className="flex-center"
		style={{
			width:"100%", height:"100%", zIndex:zIndex,
			transition: transition + "s",
			backfaceVisibility: "hidden",
			position: "absolute",
			backgroundColor: bgColor,
			padding: "2rem",
			transform: `rotate${direction}(${calcDegrees(!flipped)}deg)`,
			overflow: "hidden",
			backdropFilter: `blur(${blur})`
		}}
	  >
		{!frontQuote && ( <>
			<Card.Title>{title}</Card.Title>
			{body}
			</>
		)}
		{frontQuote && (
			<blockquote className="blockquote" style={{fontSize: "1rem"}}>
				<p>&ldquo;{body}&rdquo;</p>
				<footer className="blockquote-footer text-center mt-1">{title}</footer>
			</blockquote>
		)}
	  </Card>
	</div>
	)
}
