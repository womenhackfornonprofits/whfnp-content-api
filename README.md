[![Build Status](https://travis-ci.org/womenhackfornonprofits/whfnp-content-api.svg?branch=master)](https://travis-ci.org/womenhackfornonprofits/whfnp-content-api)

# WHFNP Content API

Content API and CMS for Women Hack for Non-Profits.

API home and documentation: {your URL}
CMS home: {your URL}/admin
Current API version root: {your URL}/api/v1

NB: User signup has been disabled for accounts to be created directly in Stormpath.

## Setup

1. Get Node/NPM from the [official website](https://nodejs.org)
2. Install the [Gulp](http://gulpjs.com/) task runner
3. Clone the repo: `git clone git@github.com:womenhackfornonprofits/whfnp-content-api`
4. Enter the directory and install the dependencies: `cd whfnp-content-api && npm install`
5. Run tests: `gulp test`
6. Run the app: `gulp`

---

## API Reference

### Authentication

Open: `POST`

#### POST api/auth/

Returns an authorization token for a valid user to access secure routes.

##### parameters

| Name | Description | Data Type |
| ---- | ----------- | --------- |
| username | User's username | string |
| password | User's password | string |


##### example response
###### success:
```
{
  "success": true,
  "message": "Token generated.",
  "token": "eydsfsd...." // nb: token shortened for example
}

```

###### error:
```
{
  "success": false,
  "message": "Auth failed: wrong password."
}

```

---

### Users

Open: `POST`

Secure: `GET | GET :id/username | PUT :id/username`

### GET api/users/

Returns a list of admin users.

##### parameters

| Name | Description | Data Type |
| ---- | ----------- | --------- |
| active  | *(optional)* active status | boolean |


##### example response

```
{
  {
    "_id": 1,
    "username": "krissy",
    "name": {
      first: "Kriselda",
      last: "Rabino"
    },
    "type": "admin",
    "active": 1,
    "createdAt": "2016-01-21 10:45:01"
  },
  {
    "_id": 2,
    "username": "tanya",
    "name": {
      first: "Tanya",
      last: "Powell"
    },
    "type": "editor",
    "active": 0,
    "createdAt": "2016-02-14 21:24:00"
  },
  {
    "_id": 3,
    "username": "tpowell1",
    "name": {
      first: "Tanya",
      last: "Powell"
    },
    "type": "viewer",
    "active": 1,
    "createdAt": "2016-02-16 17:25:30"
  }
}

```

### WHFNP

Open: `GET | GET :id/label`

Secure: `POST | PUT :id/label`

#### GET api/content/whfnp/

Returns a list of WHFNP general content.

##### parameters

| Name | Description | Data Type |
| ---- | ----------- | --------- |
| section | *(optional)* | string |


##### example response

```
{
  {
    "_id": 1,
    "section": "Who We Are",
    "label": "who-we-are",
    "content": [
      {
        "heading": "Women in Tech",
        "body": "Sartorial pop-up consectetur, single-origin coffee sunt fashion axe nulla. Food truck XOXO green juice cold-pressed tilde. Cardigan non narwhal roof party normcore. Sustainable irony waistcoat, intelligentsia kickstarter iPhone fashion axe fap 90's anim cred DIY chartreuse."
      },
      {
        "heading": "Community-Driven",
        "body": "Vice microdosing chambray twee fixie. Deserunt duis gentrify, you probably haven't heard of them helvetica bitters poutine godard neutra austin leggings roof party. Culpa salvia chicharrones, crucifix exercitation kale chips church-key pork belly."
      },
      {
        "heading": "Matchmakers",
        "body": "Artisan labore ugh, blue bottle marfa 3 wolf moon cupidatat sustainable semiotics tilde wayfarers adipisicing fixie. Raw denim intelligentsia pop-up health goth, viral truffaut commodo DIY pour-over nesciunt letterpress est laboris. Stumptown yuccie locavore tousled pariatur. Humblebrag distillery green juice cred <a href=\"http://hipsum.co/\" class=\"text-link\">pickled listicle!</a>"
      }
    ],
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-21 10:45:01",
    "updatedByUser": "tanya"
  },
  {
    "_id": 2,
    "section": "Volunteers",
    "label": "volunteers",
    "content": "Brooklyn squid dreamcatcher, esse hammock you probably haven't heard of them taxidermy ennui try-hard tattooed odio ramps. Food truck bitters exercitation, ugh accusamus pabst duis id aesthetic semiotics. Est narwhal selvage craft beer, PBR&B kombucha beard. Occaecat yuccie fap, hashtag XOXO PBR&B deep v squid accusamus voluptate vegan iPhone green juice.",
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-21 10:45:01",
    "updatedByUser": "tanya"
  },
  {
    "_id": 3,
    "section": "Non-Profits",
    "label": "non-profits",
    "content": "Photo booth fanny pack semiotics, laboris 8-bit migas pinterest vegan distillery kale chips. Banh mi enim you probably haven't heard of them tattooed. Duis mlkshk mollit, banh mi veniam occupy wayfarers fixie fingerstache sed ad.",
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-21 10:45:01",
    "updatedByUser": "tanya"
  },
  {
    "_id": 4,
    "section": "Who Are We?",
    "label": "about-who-are-we",
    "content": "Vice microdosing chambray twee fixie. Deserunt duis gentrify, you probably haven't heard of them helvetica bitters poutine godard neutra austin leggings roof party. Culpa salvia chicharrones, crucifix exercitation kale chips church-key pork belly.",
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-21 10:45:01",
    "updatedByUser": "tanya"
  },
  {
    "_id": 4,
    "section": "Our Mission",
    "label": "our-mission",
    "content": "Chambray venmo direct trade, esse cronut dolor et hoodie art party pickled 8-bit farm-to-table pabst waistcoat man braid. Cliche aliquip dolore, do post-ironic yuccie franzen stumptown delectus. Artisan bushwick four loko cronut authentic fugiat.",
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-21 10:45:01",
    "updatedByUser": "tanya"
  },
  {
    "_id": 5,
    "section": "Frequently Asked Questions: Volunteers",
    "label": "faq-volunteers",
    "content": [
      {
        "question": "How much time should I dedicate?",
        "answer": "Culpa tousled semiotics pop-up, esse DIY pinterest sapiente fixie lomo irure VHS lumbersexual kinfolk +1. Drinking vinegar cold-pressed slow-carb lo-fi. Photo booth fanny pack semiotics, laboris 8-bit migas pinterest vegan distillery kale chips."
      },
      {
        "question": "Is this program restricted to only women?",
        "answer": "Banh mi enim you probably haven't heard of them tattooed. Duis mlkshk mollit, banh mi veniam occupy wayfarers fixie fingerstache sed ad. Plaid salvia hella, affogato organic kickstarter 3 wolf moon est godard nulla pour-over excepteur quinoa sapiente."
      }
    ],
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-21 10:45:01",
    "updatedByUser": "tanya"
  },
  {
    "_id": 6,
    "section": "Frequently Asked Questions: Non-Profits",
    "label": "faq-non-profits",
    "content": [
      {
        "question": "When will development on my project begin and finish? We would like to go live in 3 months. Is that possible?",
        "answer": "Chartreuse elit PBR&B, reprehenderit sint readymade marfa accusamus keytar. Tattooed yuccie green juice, schlitz humblebrag marfa portland excepteur locavore eu ullamco knausgaard sustainable."
      }
    ],
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-21 10:45:01",
    "updatedByUser": "tanya"
  }

}

```



### Team Members

Open: `GET | GET :id/label`

Secure: `POST | PUT :id/label`

#### GET api/content/team_members/

Returns a list of team members content.

##### parameters

| Name | Description | Data Type |
| ---- | ----------- | --------- |
| active  | *(optional)* active status | boolean |
| role  | *(optional)* founder, board member | string |


##### example response

```
{
  {
    "_id": 1,
    "label": "vrathi",
    "name": {
      first: "Vinita",
      last: "Rathi"
    },
    "role": "founder",
    "active": 1,
    "dateJoined": "2015-04-21",
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-21 10:45:01",
    "updatedByUser": "tanya"
  },
  {
    "_id": 2,
    "label": "lkastilio",
    "name": {
      first: "Lili",
      last: "Kastilio"
    },
    "role": "board member",
    "board": "Volunteer Onboarding",
    "active": 1,
    "dateJoined": "2015-04-21",
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-21 10:45:01",
    "updatedByUser": "tanya"
  }
}

```


### Volunteers

Open: `GET | GET :id/label`

Secure: `POST | PUT :id/label`

#### GET api/content/volunteers/

Returns a list of volunteer content.

##### parameters

| Name | Description | Data Type |
| ---- | ----------- | --------- |
| active  | *(optional)* active status | boolean |


##### example response

```
{
  {
    "_id": 1,
    "label": "mdima",
    "name": {
      first: "Mariza",
      last: "Dima"
    },
    "testimonial": "Occaecat yuccie fap, hashtag XOXO PBR&B deep v squid accusamus voluptate vegan iPhone green juice. Brooklyn lo-fi put a bird on it, dolor four loko humblebrag nihil chartreuse tempor laborum fugiat vinyl twee.",
    "dateJoined": "2015-04-21",
    "active": 1,
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-21 10:45:01",
    "updatedByUser": "tanya"
  },
  {
    "_id": 2,
    "label": "echesters",
    "name": {
      first: "Elizabeth",
      last: "Chesters"
    },
    "testimonial": "Culpa tousled semiotics pop-up, esse DIY pinterest sapiente fixie lomo irure VHS lumbersexual kinfolk +1. Drinking vinegar cold-pressed slow-carb lo-fi. Photo booth fanny pack semiotics, laboris 8-bit migas pinterest vegan distillery kale chips. Banh mi enim you probably haven't heard of them tattooed.",
    "dateJoined": "2015-04-21",
    "active": 1,
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-23 10:45:01",
    "updatedByUser": "krissy"
  }
}

```

### Clients

Open: `GET | GET :id/label`

Secure: `POST | PUT :id/label`

#### GET api/content/clients/

Returns a list of clients content.

##### parameters

| Name | Description | Data Type |
| ---- | ----------- | --------- |
| active  | *(optional)* active status | boolean |


##### example response

```
{
  {
    "_id": 1,
    "name": "Jaspal's Voice",
    "label": "jaspals-voice",
    "testimonial": "Artisan labore ugh, blue bottle marfa 3 wolf moon cupidatat sustainable semiotics tilde wayfarers adipisicing fixie. Raw denim intelligentsia pop-up health goth, viral truffaut commodo DIY pour-over nesciunt letterpress est laboris.",
    "website": "http://www.jaspalsvoice.co.uk",
    "active": 1,
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-21 10:45:01",
    "updatedByUser": "tanya"
  },
  {
    "_id": 2,
    "name": "PimpMyCause",
    "label": "pimp-my-cause",
    "testimonial": "Artisan labore ugh, blue bottle marfa 3 wolf moon cupidatat sustainable semiotics tilde wayfarers adipisicing fixie. Raw denim intelligentsia pop-up health goth, viral truffaut commodo DIY pour-over nesciunt letterpress est laboris.",
    "website": "http://www.jaspalsvoice.co.uk",
    "active": 1,
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-21 10:45:01",
    "updatedByUser": "tanya"
  }
}

```


### Projects

Open: `GET | GET :id/label`

Secure: `POST | PUT :id/label`

#### GET api/content/projects/

Returns a list of project content.

##### parameters

| Name | Description | Data Type |
| ---- | ----------- | --------- |
| active  | *(optional)* active status | boolean |
| status | (*optional*) e.g. complete, current | string |
| client | (*optional*) client | string |


##### example response

```
{
  {
    "_id": 1,
    "projectName": "Website and Mobile App",
    "client": "jaspals-voice"
    "stack": [ "HTML", "CSS", "JavaScript", "Java", "Play", "AWS", "Sketch" ]
    "description": "Artisan labore ugh, blue bottle marfa 3 wolf moon cupidatat sustainable semiotics tilde wayfarers adipisicing fixie. Raw denim intelligentsia pop-up health goth, viral truffaut commodo DIY pour-over nesciunt letterpress est laboris.",
    "links": {
      "github": "https://github.com/ClaudiaHosu/Jaspals-Web",
      "website": "http://www.jaspalsvoice.co.uk"
    },
    "status": "complete",
    "dateCompleted": "2015-12-01",
    "dateStarted": "2015-05-01",
    "active": 1,
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-21 10:45:01",
    "updatedByUser": "tanya"
  },
  {
    "_id": 2,
    "projectName": "Website Revamp",
    "client": "pimp-my-cause"
    "stack": [ "PHP", "HTML", "CSS", "JavaScript", "Heroku", "AWS" ]
    "description": "Artisan labore ugh, blue bottle marfa 3 wolf moon cupidatat sustainable semiotics tilde wayfarers adipisicing fixie. Raw denim intelligentsia pop-up health goth, viral truffaut commodo DIY pour-over nesciunt letterpress est laboris.",
    "links": {
      "github": "https://github.com/womenhackfornonprofits/pimpmycause-rebuild",
      "website": "http://www.pimpmycause.org"
    },
    "status": "current",
    "dateStarted": "2015-05-01",
    "active": 1,
    "createdAt": "2016-01-21 10:45:01",
    "updatedAt": "2016-01-21 10:45:01",
    "updatedByUser": "tanya"
  }
}

```
