export type Contacts = {
	contactName: string;
	contactUrl: string;
};

export default function contactList(): Contacts[] {
	return [
		{
			contactName: "Sribu.com",
			contactUrl: "https://www.sribu.com/id/users/nhweb12342",
		},
		{
			contactName: "E-mail",
			contactUrl: "mailto:business.hydare@proton.me",
		},
		{
			contactName: "Contra",
			contactUrl:
				"https://contra.com/naufal_haidar_rauf_da817uk4?referralExperimentNid=SOCIAL_REFERRAL_PROGRAM&referrerUsername=naufal_haidar_rauf_da817uk4",
		},
	];
}
