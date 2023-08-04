import { z } from 'zod';

const UserSchema = z.object({
    login: z.string(),
    avatar_url: z.string(),
    name: z.string(),
    public_repos: z.number(),
    followers: z.number(),
    following: z.number(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    repos_url: z.string(),
    followers_url: z.string()
})

interface UserProps extends z.infer<typeof UserSchema> { }
const userValidation = UserSchema.safeParse({
    "login": "cemgthedev",
    "id": 113810798,
    "node_id": "U_kgDOBsidbg",
    "avatar_url": "https://avatars.githubusercontent.com/u/113810798?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/cemgthedev",
    "html_url": "https://github.com/cemgthedev",
    "followers_url": "https://api.github.com/users/cemgthedev/followers",
    "following_url": "https://api.github.com/users/cemgthedev/following{/other_user}",
    "gists_url": "https://api.github.com/users/cemgthedev/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/cemgthedev/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/cemgthedev/subscriptions",
    "organizations_url": "https://api.github.com/users/cemgthedev/orgs",
    "repos_url": "https://api.github.com/users/cemgthedev/repos",
    "events_url": "https://api.github.com/users/cemgthedev/events{/privacy}",
    "received_events_url": "https://api.github.com/users/cemgthedev/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Carlos Eduardo de Moura Gomes",
    "company": null,
    "blog": "",
    "location": "Quixadá",
    "email": null,
    "hireable": null,
    "bio": "Apaixonado por Desenvolvimento Web estou constantemente fortalecendo esta relação.",
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 0,
    "followers": 3,
    "following": 2,
    "created_at": "2022-09-18T01:45:16Z",
    "updated_at": "2023-07-08T15:36:32Z"
}
)
if (userValidation.success) {
    const user: UserProps = userValidation.data
    console.log("Usuário validado: ", user);
}

const RepositorySchema = z.object({
    name: z.string(),
    html_url: z.string(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    stargazers_count: z.number(),
    watchers_count: z.number(),
    size: z.number(),
    forks_count: z.number(),
})

interface RepositoryProps extends z.infer<typeof RepositorySchema> { }

const repositoryValidation = RepositorySchema.safeParse({
    "id": 593843740,
    "node_id": "R_kgDOI2VWHA",
    "name": "GitHub-Stalker",
    "full_name": "cemgthedev/GitHub-Stalker",
    "private": false,
    "owner": {
        "login": "cemgthedev",
        "id": 113810798,
        "node_id": "U_kgDOBsidbg",
        "avatar_url": "https://avatars.githubusercontent.com/u/113810798?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/cemgthedev",
        "html_url": "https://github.com/cemgthedev",
        "followers_url": "https://api.github.com/users/cemgthedev/followers",
        "following_url": "https://api.github.com/users/cemgthedev/following{/other_user}",
        "gists_url": "https://api.github.com/users/cemgthedev/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/cemgthedev/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/cemgthedev/subscriptions",
        "organizations_url": "https://api.github.com/users/cemgthedev/orgs",
        "repos_url": "https://api.github.com/users/cemgthedev/repos",
        "events_url": "https://api.github.com/users/cemgthedev/events{/privacy}",
        "received_events_url": "https://api.github.com/users/cemgthedev/received_events",
        "type": "User",
        "site_admin": false
    },
    "html_url": "https://github.com/cemgthedev/GitHub-Stalker",
    "description": "Uma aplicação web para você \"stalkear\" usuários do github",
    "fork": false,
    "url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker",
    "forks_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/forks",
    "keys_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/teams",
    "hooks_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/hooks",
    "issue_events_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/issues/events{/number}",
    "events_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/events",
    "assignees_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/assignees{/user}",
    "branches_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/branches{/branch}",
    "tags_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/tags",
    "blobs_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/languages",
    "stargazers_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/stargazers",
    "contributors_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/contributors",
    "subscribers_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/subscribers",
    "subscription_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/subscription",
    "commits_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/contents/{+path}",
    "compare_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/merges",
    "archive_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/downloads",
    "issues_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/issues{/number}",
    "pulls_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/labels{/name}",
    "releases_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/releases{/id}",
    "deployments_url": "https://api.github.com/repos/cemgthedev/GitHub-Stalker/deployments",
    "created_at": "2023-01-27T00:34:59Z",
    "updated_at": "2023-02-19T14:55:02Z",
    "pushed_at": "2023-07-10T00:09:36Z",
    "git_url": "git://github.com/cemgthedev/GitHub-Stalker.git",
    "ssh_url": "git@github.com:cemgthedev/GitHub-Stalker.git",
    "clone_url": "https://github.com/cemgthedev/GitHub-Stalker.git",
    "svn_url": "https://github.com/cemgthedev/GitHub-Stalker",
    "homepage": "https://github-stalker-gray.vercel.app/",
    "size": 1146,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "TypeScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
    },
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [
        "react",
        "storybook",
        "tailwindcss",
        "typescript"
    ],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main"
})
if (repositoryValidation.success) {
    const repository: RepositoryProps = repositoryValidation.data
    console.log("Repositório validado: ", repository)
}

const FollowerSchema = z.object({
    avatar_url: z.string(),
    html_url: z.string(),
    login: z.string()
})

interface FollowerProps extends z.infer<typeof FollowerSchema> { }

const followerValitation = FollowerSchema.safeParse({
    "login": "jefim9413",
    "id": 56725964,
    "node_id": "MDQ6VXNlcjU2NzI1OTY0",
    "avatar_url": "https://avatars.githubusercontent.com/u/56725964?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jefim9413",
    "html_url": "https://github.com/jefim9413",
    "followers_url": "https://api.github.com/users/jefim9413/followers",
    "following_url": "https://api.github.com/users/jefim9413/following{/other_user}",
    "gists_url": "https://api.github.com/users/jefim9413/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jefim9413/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jefim9413/subscriptions",
    "organizations_url": "https://api.github.com/users/jefim9413/orgs",
    "repos_url": "https://api.github.com/users/jefim9413/repos",
    "events_url": "https://api.github.com/users/jefim9413/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jefim9413/received_events",
    "type": "User",
    "site_admin": false
})

if (followerValitation.success) {
    const follower: FollowerProps = followerValitation.data
    console.log("Seguidor validado: ", follower)
}