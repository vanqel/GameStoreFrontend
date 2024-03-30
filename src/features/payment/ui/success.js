import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import sendSuccessPayment from "../api/succes";


const Success = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const OutSum = searchParams.get('OutSum');
    const InvId = searchParams.get('InvId');
    const SignatureValue = searchParams.get('SignatureValue');

    const history = useHistory();

    React.useEffect(() => {
        const redirectToHomePage = async () => {
            history.push('/');
            await sendSuccessPayment(OutSum, InvId, SignatureValue);
        };

        redirectToHomePage();
    }, [OutSum, InvId, SignatureValue, history]);

    return null;
};
export default Success;

