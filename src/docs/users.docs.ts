/**
 * @swagger
 * components:
 *  schemas:
 *      users:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: Name of the user
 *              username:
 *                  type: string
 *                  description: Nickname of user
 *              email:
 *                  type: string
 *                  description: Email address of user
 *          required:
 *              - name
 *              - username
 *              - email
 *          
 * 
 * @swagger
 * components:
 *  securitySchemes:
 *      BearerAuth:
 *          type: http
 *          scheme: bearer
 * 
 * 
 * @swagger
 * /users:
 *  get:
 *    summary: Find whole users data
 *    tags: [Users]
 *    security:
 *      - BearerAuth: []
 *    responses:
 *      200:
 *          description: Whole users data
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/users'
 *      
 * 
 * /users/:id:
 *  get:
 *      summary: Find an specific user per Id
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id of user
 *      responses:
 *          200:
 *              description: User
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/users'
 *          401:
 *              description: Unauthorized
 * @swagger
 * /users:
 *  post:
 *      summary: Create a new user
 *      tags: [Users]
 *      security:
 *          - BearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/users'
 *      responses:
 *          200:
 *              description: A new user has been added
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/users'
 *          401:
 *              description: Unauthorized         
 *                          
 * @swagger
 * /users/:id:
 *  put:
 *      summary: Edit user's data
 *      tags: [Users]
 *      security:
 *          - BearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id per user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/users'
 *      responses:
 *          200:
 *              description: User has been edited
 *          401:
 *              description: Unauthorized
 * @swagger
 * /users/:id:
 *  delete:
 *      summary: Delete an user by specific Id
 *      tags: [Users]
 *      security:
 *          - BearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id of the user
 *      responses:
 *          200:
 *              description: User has been removed
 *          
 * 
 * 
 *    
 */