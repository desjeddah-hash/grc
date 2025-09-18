# Diagram Tasks (Lovable-ready)

Map of PDF figures to generation prompts/tasks.

## Figure 1 – Platform Components
- Actors: Admin, Data Entry, Owner, Compliance Manager, Assessor, Control Owner, Auditor
- Components: Auth, Users Orgs, Frameworks, Assessments, Controls, Evidence, Dashboard
- Relationships: Role-based access to components

## Figure 2 – Activity Diagram
- Flow: Login → Dashboard → Create/Assign → Upload Evidence → Review/Audit → Close

## Figure 3 – Use-case Diagram
- Include: Manage Users, Orgs, Plans, Industries, Cities, Frameworks, Assessments, Evidence, Auditing

## Figure 4–6 – MVC Diagrams
- Model: User, Organization, Framework, Assessment, Control, Evidence, Assignment, Plan, Industry, City, Policy, Terms
- View: Dashboards per role + CRUD pages
- Controller: API routes per entity

## Figure 7 – Auth Sequence
- Steps: login → verify creds → sign JWT → set cookie → redirect

## Figure 8 – Create Assessment Sequence
- select framework → title → create assessment → assign controls → notify
