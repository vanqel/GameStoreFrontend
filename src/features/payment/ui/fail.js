import React from "react";
import sendFailPayment from "../api/fail";
import { useLocation, useHistory } from "react-router-dom";


const Fail = () => {
        const location = useLocation();
        const searchParams = new URLSearchParams(location.search);
        const OutSum = searchParams.get('OutSum');
        const InvId = searchParams.get('InvId');
        const SignatureValue = searchParams.get('SignatureValue');

        const history = useHistory();

        React.useEffect(() => {
                const redirectToHomePage = async () => {
                        await sendFailPayment(OutSum, InvId, SignatureValue);
                        history.push('/');
                };

                redirectToHomePage();
        }, [OutSum, InvId, SignatureValue, history]);

        return null;
};
export default Fail;

