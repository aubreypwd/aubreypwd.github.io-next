import sortobject from 'deep-sort-object';
import objectFlip from 'object-flip';

import PostLink from '../components/PostLink.jsx';

import posts from '../posts.json';
import moment from 'moment';


export default function Posts( { slug } ) {
	if ( ! slug || 'help' === slug ) {
		return <></>
	}

	let sorted = sortobject( posts[ slug ] );

	function reverseObject( object ) {
		let reversed = {};

		let keys = Object.keys( object ).reverse();

		keys.forEach( key => {
			reversed[ key ] = object[ key ];
		} );

		return reversed;
	}

	sorted = reverseObject( sorted );

	return <>
		<ul>
			{Object.keys( sorted ).map( date =>
				<li key={`/${sorted[date]}`}>
					<PostLink slug={`${sorted[date]}`} navigator={slug} />
				</li>
			)}
		</ul>

		<style jsx>{`
			ul {
				list-style: none;
				padding-left: 20px;
				padding-right: 20px;

				li {
					padding: 3px 0;
				}
			}
		`}</style>
	</>;
};
