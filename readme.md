Admin Login

```
{
    "email": "admin@gmail.com",
    "password": "123456"
}
```

Non-admin login

```
{
    "email": "user@gmail.com",
    "password": "123456"
}
```

(Stripe) Card Payment Details [For USD]

```
4000 0027 6000 3184
Any future Date
Any three digit
```

![](./screen-caps/01Homepage.jpeg)
![](./screen-caps/02RegistrationPage.jpeg)
![](./screen-caps/03LoginPage.jpeg)
![](./screen-caps/04CartPage.jpeg)
![](./screen-caps/05ShippingScreen.jpeg)
![](./screen-caps/06OrderConfirmationScreen.jpeg)
![](./screen-caps/07PaymentDetailsScreen.jpeg)

![](./screen-caps/08SuccessfulOrder.jpeg)
![](./screen-caps/09OrderDashboard.jpeg)
![](./screen-caps/10OrderDetailsPage.jpeg)
![](./screen-caps/11ProductDetails.jpeg)
![](./screen-caps/12ProfilePage.jpeg)
![](./screen-caps/13UpdateProfilePage.jpeg)
![](./screen-caps/14AdminDashboard.jpeg)
![](./screen-caps/15ProductManagementDashboard.jpeg)
![](./screen-caps/16OrderManagementDashboard.jpeg)
![](./screen-caps/17UserManagementDashboard.jpeg)
![](./screen-caps/18ReviewManagementDashboard.jpeg)
![](./screen-caps/19AddProductPage.jpeg)
![](./screen-caps/20UpdateProductPage.jpeg)
![](./screen-caps/21Search&Filter.jpeg)
![](./screen-caps/stripe.jpeg)
## Usage

- Create a .env file inside backend/config.

- Copy the following lines and specify appropriate values.

```
PORT = 4000
NODE_ENV = DEVELOPMENT
DB_URI = mongodb+srv://<username>:<password>@mern.apqfp.mongodb.net/<collection-name>?retryWrites=true&
JWT_SECRET =
JWT_EXPIRES_TIME = 7d
COOKIE_EXPIRES_TIME = 7

CLOUDINARY_CLOUD_NAME =
CLOUDINARY_API_KEY =
CLOUDINARY_API_SECRET =

STRIPE_SECRET_KEY =
STRIPE_API_KEY =

SMTP_HOST = smtp.mailtrap.io
SMTP_PORT = 2525
SMTP_EMAIL =
SMTP_PASSWORD =
SMTP_FROM_EMAIL = noreply@shopit.com
SMTP_FROM_NAME = ShopIT
```

Install dependencies

```bash
npm install
cd frontend
npm install
```

### Run App

For running Server

```bash
npm run dev
```

For running Client

```bash
npm start
```
