let baseURL = "https://dev.d30t19km7frel7.amplifyapp.com/"

if (process.env.NODE_ENV == "development") {
    baseURL = "http://localhost:8080/"
}

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:1fb6483e-c25d-4a1c-908a-f1c7a5389045", // Identity pool gauge_identitypool_dev
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_mgCjGj4q2",
    "aws_user_pools_web_client_id": "5g5osv7n7o5jqhaqe36b8mvddb",
    "oauth": {
        domain: "mhtest1.auth.us-east-1.amazoncognito.com",
        scope: ["email", "openid", "phone", "aws.cognito.signin.user.admin"],
        redirectSignIn: `${baseURL}`,
        redirectSignOut: `${baseURL}`,
        responseType: "code"
      },
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_appsync_graphqlEndpoint": "https://iy2ubtn5onhr5pmqpcxnvdfo3m.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
    "aws_appsync_dangerously_connect_to_http_endpoint_for_testing": true
};


export default awsmobile;