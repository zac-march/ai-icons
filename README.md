# AIcons

AIcons is an AI-powered icon generator that creates customized variations of icons based on user specifications, saving time and eliminating the need for expensive design services.

**Link to project:** https://zac-march.github.io/aicons/

![demo](https://raw.githubusercontent.com/zac-march/aicons/main/demo/demo.gif)

## How It's Made:

**Tech used:** React, JavaScript, HTML, CSS Modules, Node.JS, AWS Lambda

Upon form submission, an API call triggers an AWS Lambda function, which constructs a prompt based on the user's input. The function then makes an API call to the OpenAI DALL-E API. The resulting OpenAI response is sent back to the frontend, where the generated icons are showcased to the user.

## Roadmap

Looking ahead, I have an exciting lineup of upcoming features in the pipeline:

- Easy image download on hover
- Image compression: Reduce generated image size (from 3MB)
- User authentication implementation
- Payment processing integration

## Lessons Learned:

- **Mobile-first development:** I prioritized styling this application to ensure optimal display on mobile devices. This streamlined the process of adapting it to different screen sizes, saving considerable time. I plan to adopt this approach for future projects.

## Check out another project:

[CVSimple](https://github.com/zac-march/CVSimple) - enables effortless creation of professional resumes

#

[<-- Back to my profile](https://github.com/zac-march)
