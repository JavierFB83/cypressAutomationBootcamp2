describe('Use GET method to get data from typicode', () => {
  
    it.skip('first visit and get on typicode.com', () => {
      cy.visit("https://jsonplaceholder.typicode.com/");
      cy.request({
        method: 'GET',
        url: '/posts'
      })
    });

    it('Get on typicode.com', () => {
      cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
      });
    });

    it('Get without declare parameter (method and url) on typicode.com', () => {
      cy.request('GET','https://jsonplaceholder.typicode.com/posts');
    });
    
    it('Get without method on typicode.com', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts');
    });

    it('Get on typicode.com and check status code with then', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    it('Get on typicode.com with its status', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts').its('status').should('eq', 200);
    });

    it('Get on typicode.com with its body and check length', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts').its('body').should('have.length', 100);
    });

    it('Get on typicode.com and use should and expect on the response', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts').should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(100);
      });
    });

    it('Get on typicode.com and check status, lenght and its an array and not a number', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts').should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(100);
        expect(response.body).to.be.a('array');
        expect(response.body).not.to.be.a('number');
      });
    });

    it("Get on typicode.com /post1 body", () => {
      cy.request("https://jsonplaceholder.typicode.com/posts/1").should(
        (response) => {
          expect(response.body).to.be.a("object");
          expect(response.body).not.to.be.a("number");
          expect(response.body.userId).to.be.eq(1); 
          expect(response.body.title).to.be.contain(
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
          );
        });
    });

    it('check that the response fot the endpoint "/posts"  and include the keys userId, id, title, body ', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts').should((response) => {
        response.body.forEach((array) => {
          expect(array).to.include.all.keys(['userId', 'id', 'title', 'body']);
        })
      })
    });
    
})

