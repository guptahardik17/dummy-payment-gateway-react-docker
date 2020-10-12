# Dummy Payment Gateway (Reactjs + Docker)

## Git Repo URL
- https://github.com/guptahardik17/dummy-payment-gateway-react-docker

## Live Instance (temporary)
Currently this react service is deployed on Amazon EC2.
```sh
BASE URL:  http://65.0.92.87
Alternate BASE URL:  http://ec2-65-0-92-87.ap-south-1.compute.amazonaws.com
```

## Features
- List of recipes in the form of Cards [ id,name, image, category, label, price, description].
- On click on a recipe to open a Payment Gateway.
- Payment Gateway should take Dummy Credit/Debit Card Details as input and it must show the appropriate price Securely.
- On submitting Credit/Debit Card details it should be redirected to OTP Screen. It must also show the appropriate price Securely.
- If OTP is “123456”, it should redirect to a Successful Payment Screen.
- If OTP is anything else, it should redirect to a Failed Payment Screen.

## Deployment
```sh
$ git clone https://github.com/guptahardik17/dummy-payment-gateway-react-docker.git
$ cd dummy-payment-gateway-react-docker
$ docker-compose up --build
```

## Screenshots
![enter image description here][1]
![enter image description here][8]
![enter image description here][2]
![enter image description here][3]
![enter image description here][4]
![enter image description here][7]
![enter image description here][5]
![enter image description here][6]

[1]: https://he-s3.s3.amazonaws.com/media/uploads/8817987.png
[2]: https://he-s3.s3.amazonaws.com/media/uploads/9fac57c.png
[3]: https://he-s3.s3.amazonaws.com/media/uploads/de12662.png
[4]: https://he-s3.s3.amazonaws.com/media/uploads/a75666d.png
[5]: https://he-s3.s3.amazonaws.com/media/uploads/b015c35.png
[6]: https://he-s3.s3.amazonaws.com/media/uploads/b6c7b83.png
[7]: https://he-s3.s3.amazonaws.com/media/uploads/d403901.png
[8]: https://he-s3.s3.amazonaws.com/media/uploads/dc2969e.png