<p align = "center">

<img src = "public/favicon.ico" style = "height:250px;width:250px">

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

2. Head over to your **Forked** Repository, and locate the `src/images/projects` directory. Upload the `Logo/Thumbnail` of your project and name the file the **Name of your Project**. 

3. Locate `src/data/projects.json` file and paste the following Code Snippet

> [!Warning]
> Don't add this before line 10!

```json
{
  "title": "Name / Title of Your Project",
  "technologies": ["Tool 1", "Tool 2", "..."],
  "liveUrl": "Link to the Website of your Project",
  "codeUrl": "Link to the Git Repository of your Project",
  "info": "A Brief overview of your Project",
  "repositoryName": "Name of your Project"
},
```

>[!Note]
> Remeber the value of `repositoryName` as it will be required in the next step

> [!Tip]
> If your project does not have a Website, add the link to the Git Repository. 

4. After **saving** the file, head over to the `project-thumbnails.js` file in the `src/data` directory,

- Add this at the top of the File:

```js
import [Name of your Project] from "../images/projects/[File name]"
```

- Add this on line `5`:

> [!Warning]
> Ensure that the `[Name of your Project]` in the code below matches the `[Name of your Project]` at the top of the file

```js
[RepositoryName]: [Name of your Project],
```

> [!Tip]
> The `RepositoryName` can be found in the `projects.json` file which you edited in the previous step

5. **Save** the file and open a pull-request on this repository. Your PR will be **merged**/**reviewed** as soon as possible!

- > Don't Forget to Check out [ZemProfiles](https://github.com/Zemerik/ZemProfiles)

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
