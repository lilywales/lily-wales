import React from 'react';
import MediaQuery from 'react-responsive';

const PhotoCredit = props => {
	const styles = {
		photoCredit: {
			position: 'absolute',
			width: props.width || '270px',
			height: props.height,
			right: props.right,
			left: props.left,
			color: props.color,
			top: props.top,
			textAlign: props.textAlign,
		},
		ipadPhotoCredit: {
			position: 'absolute',
			width: props.width || '180px',
			right: props.right,
			left: props.left,
			color: props.color,
			top: props.top,
			textAlign: props.textAlign,
		},
    mobilePhotoCredit: {
      position: 'absolute',
      right: props.right,
			left: props.left,
      color: props.color,
			width: props.width || '150px',
      top: props.top,
      textAlign: props.textAlign,
    }
	};
	return (
		<div>
			<MediaQuery minWidth={900}>
				<div style={styles.photoCredit}>
					<p>{props.photoCredit}</p>
				</div>
			</MediaQuery>
			<MediaQuery minWidth={600} maxWidth={899}>
				<div style={styles.ipadPhotoCredit}>
					<p>{props.photoCredit}</p>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={599}>
				<div style={styles.mobilePhotoCredit}>
					<p>{props.photoCredit}</p>
				</div>
			</MediaQuery>
		</div>
	);
};

export default PhotoCredit;
