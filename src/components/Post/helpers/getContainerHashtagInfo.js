import { GivingBackHashtag, PartnershipHashtag } from '../../../constants/hashTags'

const getContainerHashtagInfo = (text) => ({
	background: text.includes(GivingBackHashtag) ? '#FFDAE7' : '#fff',
	hashTag: text.includes(GivingBackHashtag) ? GivingBackHashtag : text.includes(PartnershipHashtag) ? PartnershipHashtag : ''
});

export default getContainerHashtagInfo;
	
