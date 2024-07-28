<p align = "center">

<img src = "public/logo.png" style = "height:250px;width:250px">

<br>

<br>

<img src = "https://skillicons.dev/icons?i=javascript,css,html,react,vscode,vercel,github&perline=25">

</p>

<h1 align = "center">
  ZemShowcase
</h1>

<p align = "center">
  Showcase & Connect with Developers
</p>

<p align = "center">
  <img src = "public/Screenshot.png">
</p>

## ➕ Adding your Project:

1. Fork a copy of this Repository on your Github account by clicking below,

- [Fork](https://github.com/Zemerik/ZemShowcase/fork)

2. Clone your Forked Repository by using the following `GIT` command:

```bash
git clone https://github.com/[YOUR GITHUB USERNAME]/ZemShowcase.git
```

3. Navigate into the Project's `Directory` by using the command below:

```bash
cd ZemShowcase
```

4. Initialize a Remote to the original Repository by the following `GIT` command:

```bash
git remote add upstream https://github.com/Zemerik/ZemShowcase
```

5. Create a new `branch` in which you can make your desired changes:

```bash
git checkout -b newproject
```

6. Create a new folder in the `public/projects` directory with the name of your Project and upload the following:

- Project Banner
- Project Logo
- Project Screenshot

7. Head over to the `src/data/projects.ts` file and copy paste the code snippet below:

```ts
  {
    url: 'Link to your Project',
    id: '2',
    banner: '/projects/[Project Name]/[Banner File]',
    img: '/projects/[Project Name]/[Logo File]',
    title: 'Name / Title of your Project',
    type: 'Tech Stack',
    icon: '/projects/[Project Name]/[Logo File]',
    blog: 'Blog Link' // Leave blank if not valid,
    github: 'Repository Link' // Leave blank if not valid,
    web: 'Website Link' // Leave blank if not valid,
    description:
      "Project Description",
    tags: [
      {name: 'Tags / Keywords'},
    ],
  },
  ```

> [!Important]
> Remember to fill in the Code Snippet with details of your Project

8. Add all your files to the Staging Area now:

```bash
git add --all
```

9. Commit your Changes:

```bash
git commit -m "new Project: [Project Name]"
```

> [!Note]
> Remember to have a good commit message!

10. Push all your Changes:

```bash
git push origin newproject
```

11. Create a new Pull - Request on the Original Repository

> Your Pull Request will be merged / reviewed as soon as possible

- > Don't Forget to Check out [ZemProfiles](https://github.com/Zemerik/ZemProfiles) & [ZemPosts](https://github.com/Zemerik/ZemPosts)

## 🐞Bug/Issue/Feedback/Feature Request:

- If you would like to report a bug, a issue, implement any feedack, or request any feature, you are free to do so by opening a issue on this repository. Remember to give a detailed explanation of what you are trying to say, and how it will help the website. 

## 💁 Support:

For any kind of support or inforrmation, you are free to join our **Discord Server**,

<a href = "https://discord.gg/UF9KsmuGbr">
  <img src = "https://invidget.switchblade.xyz/UF9KsmuGbr">
</a>

<h1 align = "center">
  Thanks for Visiting🙏
</h1>

<p align = "center">
  Don't forget to leave a ⭐ 
  <br>
  Made with 💖 by <a href = "https://github.com/Zemerik">Hemang Yadav (Zemerik)</a>
</p>
